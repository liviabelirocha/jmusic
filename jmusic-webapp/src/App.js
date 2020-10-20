import React, { useReducer } from "react";
import styled from "styled-components";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Menu } from './components/Menu/Menu';
import { MusicPlayer } from './components/MusicPlayer/MusicPlayer';
import { hFlexDisplay } from './styles/StyleUtils';

import { Musics } from './views/Musics';
import { Playlists } from './views/Playlists';
import { Playlist } from './views/Playlist';

const StyledApp = styled.div`
  display: inline-block;
  overflow: none;
  ${hFlexDisplay("stretch", "stretch")};
`;

export default function App() {
  const [musics, dispatch] = useReducer((state, action) => {
    
  }, []);

  return (
    <StyledApp className="App">
      <Router>
        <Menu />
        <Router>
          <Switch>
            <Route exact path="/playlists">
              <Playlists />
            </Route>

            <Route path="/playlist/:playlistId">
              <Playlist />
            </Route>

            <Route path="/musics">
              <Musics />
            </Route>

            <Route path="/">
              <Redirect to="/playlists" />
            </Route>
          </Switch>
        </Router>

        <MusicPlayer />
      </Router>
    </StyledApp>
  );
}
