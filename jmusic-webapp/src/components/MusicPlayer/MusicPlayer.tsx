import React, { useState, useRef, useEffect } from "react";

import { StyledMusicPlayer, Icons, Track } from "./Style";

import PlayIcon from "../../assets/svg/player/play.svg";
import PauseIcon from "../../assets/svg/player/pause.svg";
import StopIcon from "../../assets/svg/player/stop.svg";
import SkipStartIcon from "../../assets/svg/player/skip_start.svg";
import SkipEndIcon from "../../assets/svg/player/skip_end.svg";

const Music1 = require("../../musics/m1.mp3");
const Music2 = require("../../musics/m2.mp3");
const Music3 = require("../../musics/m3.mp3");

interface MusicPlayerProps {
  musics?: string[];
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ musics }) => {
  const [max, setMax] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [iniciou, setIniciou] = useState(false);

  let audio = useRef<HTMLAudioElement>(null!);
  const songs = [Music1, Music2, Music3];

  function pauseUnpause() {
    if (!isPaused) audio.current.pause();
    else play();
    setIsPaused(!isPaused);
  }

  function play() {
    audio.current.play();
    audio.current.addEventListener("play", () => {
      if (!iniciou) {
        const duration = audio.current.duration;
        setMax(duration);
        setIniciou(true);
      }
    });
  }

  function onSliderChange(value: number) {
    setCurrentTime(value);
  }

  function changeTrack(option: number) {
    let curr;
    option === 0 ? (curr = currentSong - 1) : (curr = currentSong + 1);
    if (curr < 0) curr = songs.length - 1;
    else if (curr >= songs.length) curr = 0;
    setCurrentSong(curr);
  }

  function stop() {
    setCurrentTime(0);
    setIniciou(false);
    setIsPaused(true);
    audio.current.pause();
    audio.current.currentTime = 0;
  }

  useEffect(() => {
    if (iniciou) {
      if (currentTime < max)
        setInterval(() => {
          setCurrentTime(audio.current.currentTime);
        });
    }
  }, [max, currentTime, iniciou]);

  return (
    <StyledMusicPlayer>
      <Icons>
        <span onClick={() => changeTrack(0)}>
          <img src={SkipStartIcon} alt="skip to start" />
        </span>
        <span onClick={stop}>
          <img src={StopIcon} alt="stop song" />
        </span>
        <span>
          <img
            src={isPaused ? PlayIcon : PauseIcon}
            alt="play song"
            onClick={pauseUnpause}
          />
        </span>
        <span onClick={() => changeTrack(1)}>
          <img src={SkipEndIcon} alt="skip to end" />
        </span>
      </Icons>
      <Track>
        <input
          type="range"
          max={max}
          value={currentTime}
          onChange={() => onSliderChange(currentTime)}
        />
        <audio ref={audio}>
          <source src={songs[currentSong]} />
        </audio>
      </Track>
    </StyledMusicPlayer>
  );
};
