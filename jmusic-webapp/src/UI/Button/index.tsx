import React, { FormEvent } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onChange: (e: FormEvent<HTMLButtonElement>) => void;
  className: string;
  htmlType: 'button' | 'submit' | 'reset';
}

const StyledPrimaryButton = styled.button`
  background-color: #613A4E;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin: 5px;
`;

const StyledLinkButton = styled(StyledPrimaryButton)`
  background-color: transparent;
  color: #613A4E;
  border: 1px solid #613A4E;
`;

const StyledAddButton = styled(StyledPrimaryButton)`
  border-radius: 20px 0 20px 0;
  background-color: #000;
  border: 1px solid #fff;
`;

export const PrimaryButton: React.FC<ButtonProps> = ({
  onChange,
  className,
  htmlType,
  children,
}) => {
  return (
    <StyledPrimaryButton
      type={htmlType}
      onChange={onChange}
      className={`${className}`}
    >
      {children}
    </StyledPrimaryButton>
  )
};

export const LinkButton: React.FC<ButtonProps> = ({
  onChange,
  className,
  htmlType,
  children,
}) => {
  return (
    <StyledLinkButton
      type={htmlType}
      onChange={onChange}
      className={`${className}`}
    >
      {children}
    </StyledLinkButton>
  )
};

export const AddButton: React.FC<ButtonProps> = ({
  onChange,
  className,
  htmlType,
  children,
}) => {
  return (
    <StyledAddButton
      type={htmlType}
      onChange={onChange}
      className={`${className}`}
    >
      {children}
    </StyledAddButton>
  )
};


