import React, { useState, useContext } from 'react'

import { StyledMusicListContent, StyledMusicList } from './Style';
import { MusicItem } from './MusicItem';
import { Divider, Trash, Add, Modal, List } from '../UI';

import { MusicListProps, MusicObject } from '../../interfaces/MusicInterface';

import { MusicContext } from '../../MusicContext';
import { PlaylistObject } from '../../interfaces/PlaylistInterface';

import { getAllPlaylist, patchPlaylist } from '../../services/playlistService';

export const MusicList: React.FC<MusicListProps> = ({ type, musics, onDelete, onAdd }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [musicId, setMusicId] = useState('');
  const [playlistId, setPlaylistId] = useState('');
  const [playlists, setPlaylists] = useState<PlaylistObject[]>([]);

  const [, dispatch] = useContext(MusicContext);

  function handleDelete(id: string) {
    if (onDelete) {
      onDelete(id);
    }
  }

  function handleAddToPlaylist(id: string) {
    setVisible(true);
    setLoading(true);
    getAllPlaylist()
      .then(res => res.data)
      .then(data => setPlaylists(data))
      .finally(() => {
        setMusicId(id);
        setLoading(false);
      });
  }

  function handleConfirmModal() {
    const playlist = playlists.find(playlist => playlist.id === playlistId);

    const newPlaylist = {
      ...playlist,
      musics: [ ...(playlist?.musics || []), musicId]
    } as PlaylistObject

    patchPlaylist(newPlaylist)
      .finally(() => setVisible(false));
  }

  function renderPlaylist(playlist: PlaylistObject) {
    return (
      <MusicItem 
        controller={false}
        key={playlist.id}
        name={playlist.name}
        onClick={() => setPlaylistId(playlist.id)}
      />
    );
  }

  function renderMusics(music: MusicObject) {
    return (
      <MusicItem 
        key={music.id}
        name={`${music.name} - ${music.author}`}
        onClick={() => dispatch({ type: 'PLAY', payload: music.id })}
        extras={[
          <Add
            key={`add${music.id}`}
            onClick={() => handleAddToPlaylist(music.id)}
          />,
          <Trash
            key={`trash${music.id}`}
            onClick={() => handleDelete(music.id)}
          />
        ]}
      />
    )
  }

  return (
    <StyledMusicListContent>
      <Modal
        title="Adicionar Música"
        visible={visible}
        loading={loading}
        onCancel={() => setVisible(false)}
        onSubmit={handleConfirmModal}
      >
        <List data={playlists} render={renderPlaylist} />
      </Modal>


      <h3>{ type }</h3>
      <Divider />
      <StyledMusicList
        data={musics}
        render={renderMusics}
      />
    </StyledMusicListContent>
  );
}