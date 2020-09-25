import React from 'react'

import { Header } from '../components/Header/Header';
import { Content } from '../components/Content/Content';
import { Box } from '../components/UI/Box';
import { AddButton } from '../components/AddButton/AddButton';
import { MusicList } from '../components/MusicList/MusicList';

export const Musics = () => {
  return (
    <Content>
      <Header 
        title="Músicas"
        button={<AddButton text="música" />}
      />

      <Box>
        <MusicList musicType="Rock" />
      </Box>
    </Content>
  );
}
