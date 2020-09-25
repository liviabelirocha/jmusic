import React, { ReactElement } from 'react'

import { StyledMusicItem } from './Style';
import { Play } from '../Icons/Icons';

interface MusicItemProps {
  name: string;
  controller?: boolean;
  extras?: ReactElement[];
}

export const MusicItem: React.FC<MusicItemProps> = ({ name, controller = true, extras }) => {
  return (
    <StyledMusicItem>
      { controller && <Play/>}
      <p className="name">{ name }</p>
      <div className="extras">
        <p className="time">00:00</p>
        { (extras || []).map(extra => extra) }
      </div>
    </StyledMusicItem>
  );
}