import React, { useEffect, useState } from 'react'
import { Content } from '../components/Content/Content';
import { Header } from '../components/Header/Header';
import { AddButton } from '../components/AddButton/AddButton';
import { Box } from '../components/UI/Box';
import { Divider } from '../components/UI/Divider';
import { PlayLists } from '../components/PlayLists/PlayLists';

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


  return (
    <Content>
      <Header
        title="Playlists"
        button={<AddButton text="playlist" />}
        extra={<p>Número de playlists: 0</p>}
      />

      <Box>
        <PlayLists playlists={playlists} loading={loading} />
      </Box>
    </Content>
  );
}