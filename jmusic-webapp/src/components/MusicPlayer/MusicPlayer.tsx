import React, { useState, useRef } from "react";

import { StyledMusicPlayer, StyledControl, StyledTrack } from "./Style";
import { Play, Pause, Stop, Skip } from '../UI/index';

import { getMusicFile } from '../../services/musicService';

const Music1 = require("../../musics/m1.mp3");
const Music2 = require("../../musics/m2.mp3");
const Music3 = require("../../musics/m3.mp3");

interface MusicPlayerProps {
  musics: string[];
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ musics }) => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [songNumber, setSongNumber] = useState(0);

  const audio = useRef<HTMLAudioElement>(null!);

  const songs = musics.map(musicId => `http://localhost:8080/music/file/${musicId}`)


  function changeMusic(songNumber: number, target: HTMLAudioElement, play: boolean = true) {
    setSongNumber(songNumber);
    target.pause();
    target.load();
    if (play) {
      target.play();
    }
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
      changeMusic(newSongNumber, target);
    }
  }

  function playOrPause() {
    setIsPaused(!isPaused);
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

  function stop() {
    const currentAudio = audio?.current;

    if (currentAudio) {
      setCurrentTime(0);
      changeMusic(0, currentAudio, false);
      playOrPause();
    }
  }

  function back() {
    const currentAudio = audio?.current;
    const newSongNumber = (songNumber - 1 < 0) ? songs.length-1 : songNumber - 1;


    if (currentAudio && newSongNumber >= 0) {
      changeMusic(newSongNumber, currentAudio);
    }
  }

  function go() {
    const currentAudio = audio?.current;

    // CHANGE SONGS TO MUSICS
    const newSongNumber = (songNumber + 1 >= songs.length) ? 0 : songNumber + 1;

    if (currentAudio) {
      changeMusic(newSongNumber, currentAudio);
    }
  }

  return (
    <StyledMusicPlayer>
      <StyledControl>
        <Skip onClick={back} start />
        <Stop onClick={stop} />
        {isPaused ? <Play onClick={play} /> : <Pause onClick={pause} />}
        <Skip onClick={go} />
      </StyledControl>

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
          preload="all"
          onTimeUpdate={handleTimeUpdate}
          onCanPlayThrough={handleStartMusic}
          onEnded={handleEndMusic}
        >
          <source src={songs[songNumber]} />
        </audio>
      </StyledTrack>
    </StyledMusicPlayer>
  );
};
