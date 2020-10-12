import styled from 'styled-components';
import { hFlexDisplay } from '../../../styles/StyleUtils';

export const StyledHeader = styled.header`
  margin-top: 50px;

  .header-content {
    & > h2 {
      font-size: 4em;
      margin: 0;
      width: 70%;
    }

    ${hFlexDisplay('flex-start', 'center')};
  }


`;
