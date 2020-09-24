import React from 'react'

import { StyledMenuItem } from './Style';

interface MenuItemProps{
  selected?: boolean;
  onClick?: (event: React.MouseEvent) => void;
};

export const MenuItem: React.FC<MenuItemProps> = ({ selected = false, onClick, children }) => {
  
  return (
    <StyledMenuItem selected={selected} onClick={onClick}>
      { children }
    </StyledMenuItem>
  );
}