import React from 'react';
import { StyledIconContent } from './Style';

interface IconProps {
  onClick?: (e: React.MouseEvent) => void;
}

interface SkipProps extends IconProps {
  start?: boolean;
}

export const Pause: React.FC<IconProps> = ({ onClick }) => {
  return (
    <StyledIconContent onClick={onClick}>
      <svg x="0px" y="0px" viewBox="0 0 477.867 477.867">
        <path
          className="jmusic-icon"
          d="M187.733,0H51.2c-9.426,0-17.067,7.641-17.067,17.067V460.8c0,9.426,7.641,17.067,17.067,17.067h136.533
			    c9.426,0,17.067-7.641,17.067-17.067V17.067C204.8,7.641,197.159,0,187.733,0z"
        />
        <path
          className="jmusic-icon"
          d="M426.667,0H290.133c-9.426,0-17.067,7.641-17.067,17.067V460.8c0,9.426,7.641,17.067,17.067,17.067h136.533
			    c9.426,0,17.067-7.641,17.067-17.067V17.067C443.733,7.641,436.092,0,426.667,0z"
        />
      </svg>
    </StyledIconContent>
  );
}

export const Play: React.FC<IconProps> = ({ onClick }) => {
  return (
    <StyledIconContent onClick={onClick}>
      <svg x="0px" y="0px" viewBox="0 0 320.001 320.001">
        <path
          className="jmusic-icon"
          d="M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288
	        c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144
	        c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z"
        />
      </svg>
    </StyledIconContent>
  )
}

export const Stop: React.FC<IconProps> = ({ onClick }) => {
  return (
    <StyledIconContent onClick={onClick}>
      <svg viewBox="0 0 320 320">
        <path
          className="jmusic-icon"
          d="M53.3,0h213.3C296.1,0,320,23.9,320,53.3v213.3c0,29.5-23.9,53.3-53.3,53.3H53.3C23.9,320,0,296.1,0,266.7V53.3 C0,23.9,23.9,0,53.3,0z"
        />
      </svg>
    </StyledIconContent >
  );
};



export const Skip: React.FC<SkipProps> = ({ onClick, start = false }) => {

  if (start) {
    return (
      <StyledIconContent onClick={onClick}>
        <svg viewBox="0 0 320 320">
          <path
            className="jmusic-icon"
            d="M267.3,4L44.5,133.2V17.8C44.5,8,36.5,0,26.7,0S8.9,8,8.9,17.8v284.4c0,9.8,8,17.8,17.8,17.8s17.8-8,17.8-17.8V186.8 L267.3,316c19.2,11.1,43.8-2.3,43.8-24.8V28.7C311.1,6.3,286.5-7.2,267.3,4z"
          />
        </svg>
      </StyledIconContent >
    );
  }

  return (
    <StyledIconContent onClick={onClick}>
      <svg viewBox="0 0 320 320">
        <path
          className="jmusic-icon"
          d="M293.3,0c-9.8,0-17.8,8-17.8,17.8v115.5L52.7,4C33.5-7.2,8.9,6.3,8.9,28.7v262.5c0,22.4,24.6,35.9,43.8,24.8l222.8-129.3 v115.4c0,9.8,8,17.8,17.8,17.8s17.8-8,17.8-17.8V17.8C311.1,8,303.1,0,293.3,0z"
        />
      </svg>
    </StyledIconContent >
  );
};

export const Trash: React.FC<IconProps> = ({ onClick }) => {
  return (
    <StyledIconContent onClick={onClick}>
      <svg viewBox="0 0 512 512">
        <path
          className="jmusic-icon"
          d="M469.333,85.333h-42.667h-64v-64C362.667,9.557,353.131,0,341.333,0H170.667c-11.797,0-21.333,9.557-21.333,21.333v64h-64 H42.667c-11.797,0-21.333,9.557-21.333,21.333S30.869,128,42.667,128H64v320c0,35.285,28.715,64,64,64h256 c35.285,0,64-28.715,64-64V128h21.333c11.797,0,21.333-9.557,21.333-21.333S481.131,85.333,469.333,85.333z M192,42.667h128 v42.667H192V42.667z M405.333,448c0,11.755-9.557,21.333-21.333,21.333H128c-11.776,0-21.333-9.579-21.333-21.333V128h64h170.667 h64V448z"
        />
      </svg>
    </StyledIconContent>
  );
};

export const Add: React.FC<IconProps> = ({ onClick }) => {
  return (
    <StyledIconContent onClick={onClick}>
      <svg viewBox="0 0 448 448">
        <path 
          className="jmusic-icon"
          d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"
        />
      </svg>
    </StyledIconContent>
  );
};