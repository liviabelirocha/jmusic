import React from 'react'

import { PolygonStyled } from './Style';

export const Loading = () => {
  return (
    <PolygonStyled className="polygon-content">
      <svg width="50" height="50">
        <polygon
          className="polygon-loading"
          points="25,5 1,48 49,48"
        />
      </svg>
    </PolygonStyled>
  );
}
