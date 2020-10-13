import React from "react";

import { Divider } from "../UI/Divider";
import { MusicItem } from "../MusicList/MusicItem";
import { MusicPlayer } from "../MusicPlayer/MusicPlayer";

const Music1 = require("../../musics/m1.mp3");
const Music2 = require("../../musics/m2.mp3");

export const PlayList = () => {
  const songs = [Music1, Music2];

  return (
    <div>
      <Divider />
      <ul>
        <MusicItem name="As melhores - Calcinha Preta" />
        <MusicItem name="As melhores para chorar e se sentir insuficiente" />
      </ul>
      <MusicPlayer songs={songs} />
    </div>
  );
};
