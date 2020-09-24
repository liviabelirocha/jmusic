import styled from 'styled-components';
import { vFlexDisplay } from '../../styles/StyleUtils';
import  { Link } from 'react-router-dom';

export const StyledMenu = styled.ul`
  ${vFlexDisplay('center', 'flex-start')};
  background-color: #383236;
  height: 100vh;
  width: 300px;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #fff;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  width: 100%;
`;

type MenuItemBgColor = { selected: boolean }

export const StyledMenuItem = styled.li`
  background-color: ${(props: MenuItemBgColor) => props.selected ? '#4F4245': 'transparent'};
  padding: 10px 0 10px 30px;
  margin: 15px 0;
  font-size: 2em;
  width: 270px;
  transition: background-color .3s linear;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: #4F4245;

  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    opacity: 0.3;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    transition: all .5s linear;
  }

  &:active:after {
    background-color: #000;
    width: 100%;
    border-radius: 0;
    transition: 0s;
  }
`;
