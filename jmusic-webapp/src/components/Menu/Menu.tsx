import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledMenu, StyledLink } from './Style';
import { MenuItem } from './MenuItem';

export const Menu = () => {
  const location = useLocation();

  const [items, setItems] = useState([
    { id: 0, name: 'Playlists', path: '/playlists', selected: true },
    { id: 1, name: 'Músicas', path: '/musics', selected: false }
  ]);

  useEffect(() => {
    const { pathname } = location;
    const target = items.find(item => item.path === pathname)

    if (target && !target.selected) {
      const newItems = items
        .filter(item => item.id !== target.id)
        .map(item => ({ ...item, selected: false }));

      setItems([ ...newItems, { ...target, selected: true } ]);
    }

  }, [location, items])

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
    </StyledMenu>
  )
}