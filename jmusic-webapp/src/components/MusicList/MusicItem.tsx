import React, { ReactElement } from 'react'

import { StyledMusicItem } from './Style';
import { Play } from '../UI';

interface MusicItemProps {
  name: string;
  controller?: boolean;
  extras?: ReactElement[];
  onClick?: (e: React.MouseEvent) => void;
}

export const MusicItem: React.FC<MusicItemProps> = ({ name, controller = true, extras, onClick }) => {
  return (
    <StyledMusicItem>
      { controller && <Play onClick={onClick} />}
      <p className="name">{ name }</p>
      <div className="extras">
        { (extras || []).map(extra => extra) }
      </div>
    </StyledMusicItem>
  );
}