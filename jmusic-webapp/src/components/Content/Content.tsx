import React from 'react'


import { StyledContent } from './Style';

export const Content = ({ children }: any) => {
  return (
    <StyledContent>
      { children }
    </StyledContent>
  );
};