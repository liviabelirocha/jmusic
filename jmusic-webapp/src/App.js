import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Menu } from './components/Menu/Menu';
import { Content } from './components/Content/Content';
import { hFlexDisplay } from './styles/StyleUtils';

const StyledApp = styled.div`
  ${hFlexDisplay('stretch', 'stretch')}
  display: inline-block;
  overflow: none;
`;

export default function App() {
  return (
    <StyledApp className="App">
      <Router>
        <Menu />
        <Router>
          <Switch>
            <Route exact path='/playlists'>
              <Content>
                <div style={{ color: 'white'}}>aaaaaaaa</div>
              </Content>
            </Route>

            <Route path='/musics'>
              <Content>
                <div style={{ color: 'white'}}>bbbbbbbbb</div>
              </Content>
            </Route>

            <Route path='/'>
              <Redirect to='/playlists' />
            </Route>
          </Switch>
        </Router>
      </Router>
    </StyledApp>
  );
}
