import React from 'react'

import { Content } from '../components/Content/Content';
import { Header } from '../components/Header/Header';
import { AddButton } from '../components/AddButton/AddButton';

export const Musics = () => {
  return (
    <Content>
      <Header 
        title="Músicas"
        button={<AddButton text="música" />}
      />
    </Content>
  );
}
