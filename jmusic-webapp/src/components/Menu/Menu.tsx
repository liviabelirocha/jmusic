import React, { useState } from 'react';
import { StyledMenu, StyledLink } from './Style';
import { MenuItem } from './MenuItem';

export const Menu = () => {
  const [selected, setSelected] = useState();

  const [items, setItems] = useState([
    { id: 0, name: 'Playlists', path: '/playlists', selected: true },
    { id: 1, name: 'Músicas', path: '/musics', selected: false }
  ]);

  function handleSelect(id: number) {
    const newItems = items.map(item => ({ ...item, selected: (item.id === id) ? true : false }));

    setItems(newItems);
  }


  return (
    <StyledMenu>
      {items.map(item => (
        <StyledLink key={item.id} to={item.path}>
          <MenuItem
            onClick={() => handleSelect(item.id)}
            selected={item.selected}
          >
            {item.name}
          </MenuItem>
        </StyledLink>
      ))

      }

      <MenuItem>
        Sair
      </MenuItem>
    </StyledMenu>
  )
}