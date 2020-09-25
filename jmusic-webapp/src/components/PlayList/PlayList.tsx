import React from 'react'

import { Divider } from '../UI/Divider';
import { MusicItem } from '../MusicList/MusicItem';

export const PlayList = () => {
  return (
    <div>
      <Divider />
      <ul>
        <MusicItem name="As melhores - Calcinha Preta" />
        <MusicItem name="As melhores para chorar e se sentir insuficiente" />
      </ul>
    </div>
  );
}