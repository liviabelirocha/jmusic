import React from 'react'

import { StyledHeader } from './Style';

interface HeaderProps {
  title: string;
  button?: React.ReactElement;
  extra?: React.ReactElement;
};

export const Header: React.FC<HeaderProps> = ({ title, button, extra = null }) => {
  return (
    <StyledHeader>
      <div className="header-content">
        <h2>{title}</h2>
        <div>
          { button }
        </div>
      </div>

      {extra}
    </StyledHeader>
  );
}