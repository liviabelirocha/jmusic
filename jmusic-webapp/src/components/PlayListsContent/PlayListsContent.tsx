import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { Header, Content, Box, List, Modal, Trash } from "../UI";
import { MusicItem } from "../MusicList/MusicItem";
import { AddButton } from "../AddButton/AddButton";

import {
  PlaylistProps,
  PlaylistObject,
} from "../../interfaces/PlaylistInterface";

import { postPlaylist } from "../../services/playlistService";

export const PlayListsContent: React.FC<PlaylistProps> = ({
  playlists,
  loading,
  onDelete,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [creating, setCreating] = useState(false);

  const history = useHistory();

  function pushToPlaylist(playlistId: string) {
    history.push(`playlist/${playlistId}`);
  }

  function handleDelete(playlistId: string) {
    if (onDelete) {
      onDelete(playlistId)
    }
  }

  function renderMusicList(playlist: PlaylistObject) {
    return (
      <MusicItem
        key={playlist.id}
        name={playlist.name}
        onClick={(e) => pushToPlaylist(playlist.id)}
        extras={[
          <Trash key={`trash${playlist.id}`} onClick={() => handleDelete(playlist.id)} />
        ]}
      />
    );
  }

  function handleSubmit() {
    const data = {
      name,
      createdBy,
      musics: [""],
      creationDate: new Date(),
    };

    setCreating(true);
    postPlaylist(data)
      .then((res) => {
        console.log(res.data);
        setCreating(false);
        setIsModalVisible(false);
        history.push(`playlist/${res.data.id}`);
      })
      .catch((err) => {
        console.log(err);
        setCreating(false);
        setIsModalVisible(false);
      });
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

        <Modal
          title="Adicionar Playlist"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onSubmit={handleSubmit}
          loading={creating}
        >
          <label>
            Nome:
              <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Criador:
              <input
              type="text"
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
            />
          </label>
        </Modal>
      </Box>
    </Content>
  );
};
