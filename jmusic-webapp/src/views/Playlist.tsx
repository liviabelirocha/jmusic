import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../components/Header/Header'
import { Content } from '../components/Content/Content';
import { Box } from '../components/UI/Box';
import { PlaylistHeaderInfo } from '../components/PlaylistHeaderInfo/PlaylistHeaderInfo';
import { PlaylistMusics } from '../components/PlaylistMusics/PlaylistMusics';

import { getPlaylist } from '../services/playlistService';
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
  }, [playlist])


  return (
    <Content>
      {playlist && (
        <Header
          title={playlist.name}
          extra={
            <PlaylistHeaderInfo  
              createdBy={'TESTE'}
              amountOfMusics={playlist.musics.length}
              duration={'00h'}
            />
          }
        />
      )}

      <Box>
        <PlaylistMusics musics={musics} loading={loadingMusics} />
      </Box>
    </Content>
  );
}