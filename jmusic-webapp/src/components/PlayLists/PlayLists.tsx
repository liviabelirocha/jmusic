import React from 'react'

import { useHistory } from 'react-router-dom';
import { Divider } from '../UI/Divider';
import { MusicItem } from '../MusicList/MusicItem';

import { PlaylistProps } from '../../interfaces/PlaylistInterface';

export const PlayLists: React.FC<PlaylistProps> = ({ playlists, loading }) => {
  const history = useHistory();

  function pushToPlaylist(playlistId: string) {
    history.push(`playlist/${playlistId}`);
  }

  function renderMusicList() {
    return playlists.map(playlist => (
      <MusicItem
        key={playlist.id}
        name={playlist.name}
        onClick={(e) => pushToPlaylist(playlist.id)}
      />
    ));
  }

  return (
    <div>
      <Divider />
      <ul>
        { renderMusicList() }
      </ul>
    </div>
  );
}