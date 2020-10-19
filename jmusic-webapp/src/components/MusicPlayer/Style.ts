import styled from "styled-components";

export const StyledMusicPlayer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #383236;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 164px;
  box-shadow: 0 -5px 5px -5px #000;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  span {
    margin-left: 1em;
  }
`;

export const StyledTrack = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    margin: 1rem 2rem;
    width: 100%;
    height: 5px;
    border-radius: 10px;
    
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    opacity: 0.7;
    
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    background: #fff;


    :hover {
      opacity: 1;
    }

    ::-moz-range-thumb {
      width: 15px;
      height: 15px;
      background: #39ff;
      cursor: pointer;
      border-radius: 50%;
      border: none;
    }
  }
`;
