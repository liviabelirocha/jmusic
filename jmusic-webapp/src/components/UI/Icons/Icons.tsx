import React from 'react';
import { StyledIconContent } from './Style';

interface IconProps {
  onClick?: (e: React.MouseEvent) => void;
}

interface SkipProps extends IconProps {
  start: boolean;
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
      <svg viewBox="0 0 16 16">
        <path
          className="jmusic-icon"
          d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"
        />
      </svg>
    </StyledIconContent>
  );
};



export const Skip: React.FC<SkipProps> = ({ onClick, start }) => {

  if (start) {
    return (
      <StyledIconContent onClick={onClick}>
        <svg viewBox="0 0 16 16">
          <path
            className="jmusic-icon"
            d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"
          />
        </svg>
      </StyledIconContent>
    );
  }

  return (
    <StyledIconContent onClick={onClick}>
      <svg viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M12 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
        <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
      </svg>
    </StyledIconContent>
  );

};
