import React from 'react'

import { StyledMusicListContent, StyledMusicList } from './Style';
import { MusicItem } from './MusicItem';
import { Divider } from '../UI/Divider';

interface MusicListProps {
  musicType?: string,
  musics?: string[],
}

export const MusicList: React.FC<MusicListProps> = ({ musicType, musics }) => {
  return (
    <StyledMusicListContent>
      <h3>{musicType}</h3>
      <Divider />
      <StyledMusicList>
        <MusicItem name={"Shallow"} />
      </StyledMusicList>
    </StyledMusicListContent>
  );
}