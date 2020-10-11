import React from 'react';

import { MusicItem } from '../MusicList/MusicItem';
import { Divider } from '../UI/Divider';

import { PlaylistMusicsProps } from '../../interfaces/PlaylistInterface';

export const PlaylistMusics: React.FC<PlaylistMusicsProps> = ({ musics, loading }) => {
  
  function renderMusicItems() {
    return musics.map(music => (
      <MusicItem 
        key={music.id}
        name={`${music.name} - ${music.author}`}
      />
    ));
  }

  return (
    <div>
      <Divider />
      <ul>
        { renderMusicItems() }
      </ul>
    </div>
  );
}