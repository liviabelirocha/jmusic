import { css } from 'styled-components';

type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'space-evenly';
type AlignContent = JustifyContent;

export const vFlexDisplay = (justifyContent: JustifyContent, alignItems: AlignContent) => css`
  display: flex;
  flex-direction: column;
  align-items: ${alignItems};
  justify-content: ${justifyContent}
`;

export const hFlexDisplay = (justifyContent: JustifyContent, alignItems: AlignContent) => css`
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;
