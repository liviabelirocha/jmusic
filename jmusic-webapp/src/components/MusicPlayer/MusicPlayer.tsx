import React, { useState, useRef, useEffect } from "react";

import { StyledMusicPlayer, StyledControl, StyledTrack } from "./Style";

import PlayIcon from "../../assets/svg/player/play.svg";
import PauseIcon from "../../assets/svg/player/pause.svg";
import StopIcon from "../../assets/svg/player/stop.svg";
import SkipStartIcon from "../../assets/svg/player/skip_start.svg";
import SkipEndIcon from "../../assets/svg/player/skip_end.svg";

import { Play, Pause, Stop } from '../UI/index'

const Music1 = require("../../musics/m1.mp3");
const Music2 = require("../../musics/m2.mp3");
const Music3 = require("../../musics/m3.mp3");

interface MusicPlayerProps {
  musics?: string[];
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ musics }) => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  const [songNumber, setSongNumber] = useState(0);

  const audio = useRef<HTMLAudioElement>(null!);

  const songs = [Music1, Music2, Music3];

  function playOrPause() {
    setIsPaused(!isPaused);
  }

  function handleTimeUpdate(event: React.SyntheticEvent) {
    event.preventDefault();

    const target = event.target as HTMLAudioElement;

    setCurrentTime(target.currentTime);
  }

  function handleAudioTime(event: React.SyntheticEvent) {
    event.preventDefault();

    const target = event.target as HTMLInputElement;
    const currentAudio = audio?.current;

    if (currentAudio) {
      const time = parseFloat(target.value)

      setCurrentTime(time);
      currentAudio.currentTime = time;
    }
  }

  function handleStartMusic(event: React.SyntheticEvent) {
    event.preventDefault();

    const target = event.currentTarget as HTMLAudioElement;

    console.log(target.duration);
    
    setDuration(target.duration);
    setCurrentTime(target.currentTime);
  }

  function handleEndMusic(event: React.SyntheticEvent) {
    event.preventDefault();

    const newSongNumber = songNumber + 1;
    const target = event.target as HTMLAudioElement;

    // CHANGE SONGS TO MUSICS
    if (newSongNumber < songs.length) {
      setSongNumber(newSongNumber);
      target.pause();
      target.load();
      target.play();
    }
  }

  function play() {
    const currentAudio = audio?.current;

    if (currentAudio) {
      currentAudio.play();
      playOrPause();
    }
  }

  function pause() {
    const currentAudio = audio?.current;

    if (currentAudio) {
      currentAudio.pause();
      playOrPause();
    }
  }

  // function stop() {
  //   setCurrentTime(0);
  //   setIsPaused(true);
  //   audio.current.pause();
  //   audio.current.currentTime = 0;
  // }

  return (
    <StyledMusicPlayer>
      <StyledControl>
        <Stop />
        { isPaused ? <Play onClick={play} /> : <Pause onClick={pause} /> }
      </StyledControl>

      {/* <Icons>
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
            onClick={playAndPause}
          />
        </span>
        <span onClick={() => changeTrack(1)}>
          <img src={SkipEndIcon} alt="skip to end" />
        </span>
      </Icons> */}
      <StyledTrack>
        <input
          type="range"
          step="any"
          max={duration}
          value={currentTime}
          onChange={handleAudioTime}
        />
        <audio
          ref={audio}
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onCanPlay={handleStartMusic}
          onEnded={handleEndMusic}
        >
          <source src={songs[songNumber]} />
        </audio>
      </StyledTrack>
    </StyledMusicPlayer>
  );
};
