import styled from "styled-components";
import { hFlexDisplay } from '../../../styles/StyleUtils';


export const PolygonStyled = styled.div`
  width: 100%;
  margin-top: 50px;

  @keyframes loading {
    to {
      stroke-dashoffset: 200;
    }
  }

  .polygon-loading {
    fill: none;
    stroke: #fff;
    stroke-width: 5;
    stroke-dasharray: 20;
    animation: 1s linear loading infinite;
  }

  ${hFlexDisplay('center', 'center')}
`;
