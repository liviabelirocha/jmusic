import React from 'react'

import { StyledMusicListContent, StyledMusicList } from './Style';
import { MusicItem } from './MusicItem';
import { Divider } from '../UI';

import { MusicListProps, MusicObject } from '../../interfaces/MusicInterface';

export const MusicList: React.FC<MusicListProps> = ({ type, musics }) => {
  function renderMusics(music: MusicObject) {
    return (
      <MusicItem 
        key={music.id}
        name={`${music.name} - ${music.author}`}
      />
    )
  }

  return (
    <StyledMusicListContent>
      <h3>{ type }</h3>
      <Divider />
      <StyledMusicList
        data={musics}
        render={renderMusics}
      />
    </StyledMusicListContent>
  );
}