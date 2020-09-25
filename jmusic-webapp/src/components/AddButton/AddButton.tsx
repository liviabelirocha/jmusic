import React from 'react'

import { StyledAddButton } from './Style';

interface AddButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const AddButton: React.FC<AddButtonProps> = ({ text, onClick }) => {
  return (
    <StyledAddButton onClick={onClick}>
      Adicionar {text}
    </StyledAddButton>
  );
}