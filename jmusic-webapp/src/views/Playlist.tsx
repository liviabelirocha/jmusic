import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PlaylistMusicsContent } from '../components/PlaylistMusicsContent/PlaylistMusicsContent';

import { getPlaylist, patchPlaylist } from '../services/playlistService';
import { getMusicsByIds } from '../services/musicService';

import { PlaylistObject } from '../interfaces/PlaylistInterface';


interface Params {
  playlistId: string;
}

export const Playlist = () => {
  const { playlistId } = useParams<Params>();

  const [loading, setLoading] = useState(false);
  const [playlist, setPlaylist] = useState<PlaylistObject | null>(null);

  const [musics, setMusics] = useState([]);
  const [loadingMusics, setLoadingMusics] = useState(false);

  useEffect(() => {
    if (playlistId) {
      setLoading(true);
      getPlaylist(playlistId)
        .then(playlist => setPlaylist(playlist.data))
        .finally(() => setLoading(false));
    }

  }, [playlistId]);

  useEffect(() => {
    if (playlist && playlist.musics.length > 0) {
      setLoadingMusics(true);
      getMusicsByIds(playlist.musics)
        .then(musics => setMusics(musics.data))
        .finally(() => setLoadingMusics(false));
    }
  }, [playlist]);

  function handleDelete(musicId: string) {
    const newPlaylist = {
      ...playlist,
      musics: (playlist?.musics || []).filter(music => music !== musicId)
    } as PlaylistObject;

    patchPlaylist(newPlaylist)
      .then(() => setPlaylist(newPlaylist));
  }


  return (
    <PlaylistMusicsContent 
      playlist={playlist}
      loadingPlaylist={loading}
      musics={musics}
      loadingMusics={loadingMusics}
      onDelete={handleDelete}
    />
  );
}