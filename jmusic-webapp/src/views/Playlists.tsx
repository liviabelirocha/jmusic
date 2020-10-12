import React, { useEffect, useState } from 'react'
import { PlayListsContent } from '../components/PlayListsContent/PlayListsContent';

import { getAllPlaylist } from '../services/playlistService';

export const Playlists = () => {
  const [loading, setLoading] = useState(false);
  const [playlists, setPlaylists] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    getAllPlaylist()
      .then(playlists => setPlaylists(playlists.data))
      .finally(() => setLoading(false));
  }, []);


  return <PlayListsContent playlists={playlists} loading={loading} />
}