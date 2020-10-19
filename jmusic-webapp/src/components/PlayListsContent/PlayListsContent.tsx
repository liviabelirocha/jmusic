import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { Header, Content, Box, List } from "../UI";
import { MusicItem } from "../MusicList/MusicItem";
import { MusicPlayer } from "../MusicPlayer/MusicPlayer";
import Modal from "../UI/Modal/Modal";
import { AddButton } from "../AddButton/AddButton";

import {
  PlaylistProps,
  PlaylistObject,
} from "../../interfaces/PlaylistInterface";

export const PlayListsContent: React.FC<PlaylistProps> = ({
  playlists,
  loading,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const history = useHistory();

  function pushToPlaylist(playlistId: string) {
    history.push(`playlist/${playlistId}`);
  }

  function renderMusicList(playlist: PlaylistObject) {
    return (
      <MusicItem
        key={playlist.id}
        name={playlist.name}
        onClick={(e) => pushToPlaylist(playlist.id)}
      />
    );
  }

  const extraHeader = <p>Número de playlists: {playlists.length}</p>;

  return (
    <Content>
      <Header
        title="Playlists"
        extra={extraHeader}
        button={
          <AddButton
            text="nova playlist"
            onClick={() => setIsModalVisible(true)}
          />
        }
      />

      <Box>
        <List data={playlists} render={renderMusicList} loading={loading} />

        {isModalVisible && (
          <Modal
            title="Adicionar Playlist"
            onCancel={() => setIsModalVisible(false)}
          >
            <label>
              Nome:
              <input type="text" />
            </label>
            <label>
              Criador:
              <input type="text" />
            </label>
          </Modal>
        )}
      </Box>

      <MusicPlayer />
    </Content>
  );
};
