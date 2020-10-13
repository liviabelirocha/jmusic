import styled from 'styled-components';

import { hFlexDisplay } from '../../styles/StyleUtils';
import { List } from '../UI/List/List';

export const StyledMusicListContent = styled.div`
  h3 {
    color: #fff;
    margin: 0;
    font-size: 1.8em;
  }
`;

export const StyledMusicList = styled(List)`
  ul {
    margin: 20px 20px;
    padding-left: 10px;
  }
`;

export const StyledMusicItem = styled.li`
  position: relative;
  max-width: 850px;
  color: #fff;
  background-color: #383236;
  margin: 20px 0;
  padding: 5px;
  padding-left: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;

  font-size: 1.4em;
  ${hFlexDisplay('flex-start', 'center')}

  & p {
    margin: 0 0 0 10px;
    position: relative;
    top: 3px;
  }

  & .extras {
    position: absolute;
    right: 20px;
  }


`;
