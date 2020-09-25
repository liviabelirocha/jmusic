import React from 'react'

import { Content } from '../components/Content/Content';
import { Header } from '../components/Header/Header';
import { AddButton } from '../components/AddButton/AddButton';
import { Box } from '../components/UI/Box';
import { PlayList } from '../components/PlayList/PlayList';


export const Playlists = () => {
  return (
    <Content>
      <Header
        title="Playlists"
        button={<AddButton text="playlist" />}
        extra={<p>Número de playlists: 0</p>}
      />

      <Box>
        <PlayList />
      </Box>
    </Content>
  );
}