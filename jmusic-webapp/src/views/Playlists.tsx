import React, { useEffect, useState } from 'react'
import { PlayListsContent } from '../components/PlayListsContent/PlayListsContent';

import { getAllPlaylist, deletePlaylist } from '../services/playlistService';

import { PlaylistObject } from '../interfaces/PlaylistInterface';

export const Playlists = () => {
  const [loading, setLoading] = useState(false);
  const [playlists, setPlaylists] = useState<PlaylistObject[]>([]);

  useEffect(() => {
    setLoading(true);
    getAllPlaylist()
      .then(playlists => setPlaylists(playlists.data))
      .finally(() => setLoading(false));
  }, []);

  function handleDelete(playlistId: string) {
    deletePlaylist(playlistId)
      .then(res => res.data)
      .then(data => {
        const newPlaylists = playlists.filter(playlist => playlist.id !== data.id);

        setPlaylists(newPlaylists);
      })
  }


  return (
    <PlayListsContent
      playlists={playlists}
      loading={loading} 
      onDelete={handleDelete}
    />
  );
}