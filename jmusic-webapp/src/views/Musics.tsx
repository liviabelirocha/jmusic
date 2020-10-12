import React from 'react'

import { Header, Content, Box } from '../components/UI';
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
