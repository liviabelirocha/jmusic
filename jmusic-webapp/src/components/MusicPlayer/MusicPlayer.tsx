import React, { useState, useRef, useEffect } from "react";

import { StyledMusicPlayer, Icons, Track } from "./Style";

import PlayIcon from "../../assets/svg/player/play.svg";
import PauseIcon from "../../assets/svg/player/pause.svg";
import StopIcon from "../../assets/svg/player/stop.svg";
import SkipStartIcon from "../../assets/svg/player/skip_start.svg";
import SkipEndIcon from "../../assets/svg/player/skip_end.svg";

interface MusicPlayerProps {
  songs: string[];
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ songs }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [value, setValue] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [iniciou, setIniciou] = useState(false);

  const audio = useRef<HTMLAudioElement>(null!);

  function pauseUpause() {
    if (!isPaused) audio.current.pause();
    else play();
    setIsPaused(!isPaused);
  }

  function play() {
    audio.current.play();
    audio.current.addEventListener("play", () => {
      if (!iniciou) {
        setMax(audio.current.duration);
        setIniciou(true);
      }
      if (currentTime < max)
        setInterval(() => {
          setValue(audio.current.currentTime);
        });
    });
  }

  function onSliderChange(value: number) {
    setCurrentTime(value);
    audio.current.currentTime = value;
  }

  useEffect(() => {
    setValue(audio.current.currentTime);
  }, []);

  return (
    <StyledMusicPlayer>
      <Icons>
        <a>
          <img src={SkipStartIcon} alt="skip to start" />
        </a>
        <a>
          <img src={StopIcon} alt="stop song" />
        </a>
        <a>
          <img
            src={isPaused ? PlayIcon : PauseIcon}
            alt="play song"
            onClick={pauseUpause}
          />
        </a>
        <a>
          <img src={SkipEndIcon} alt="skip to end" />
        </a>
      </Icons>
      <Track>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={() => onSliderChange(value)}
        />
        <audio ref={audio}>
          <source src={songs[currentSong]} />
        </audio>
      </Track>
    </StyledMusicPlayer>
  );
};
