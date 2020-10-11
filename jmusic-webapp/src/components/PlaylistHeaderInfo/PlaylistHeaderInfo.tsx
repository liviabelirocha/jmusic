import React from 'react';

import { PlaylistHeaderInfoProps } from '../../interfaces/PlaylistInterface';
import { PlaylistHeaderInfoStyled } from './Style';

export const PlaylistHeaderInfo: React.FC<PlaylistHeaderInfoProps> = ({
  createdBy,
  amountOfMusics,
  duration 
}) => {

  return (
    <PlaylistHeaderInfoStyled>
      <p>
        <span>Criado por: {createdBy}</span>
        <span>Duração: {duration}</span>  
      </p>

      <p>Total de músicas: {amountOfMusics}</p>
    </PlaylistHeaderInfoStyled>
  );
}