import styled from 'styled-components';

export const StyledAddButton = styled.button`
  position: relative;
  color: #fff;
  font-size: 1.5em;
  background-color: transparent;
  padding: 10px 30px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: none;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    opacity: 0.3;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    transition: all .5s linear;
  }

  &:active:after {
    background-color: #94DAA0;
    width: 100%;
    transition: 0s;
  }
`;
