import React, { useState } from "react";

import { Content, Header, Box, Loading } from "../UI";
import { MusicsContentProps } from "../../interfaces/MusicInterface";
import { MusicList } from "../MusicList/MusicList";
import { MusicPlayer } from "../MusicPlayer/MusicPlayer";
import Modal from "../UI/Modal/Modal";
import { AddButton } from "../AddButton/AddButton";

export const MusicsContent: React.FC<MusicsContentProps> = ({
  musics,
  loading,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function renderMusics() {
    if (loading) {
      return <Loading />;
    }

    return musics.map(([style, musics]) => (
      <MusicList key={style} type={style} musics={musics} />
    ));
  }

  return (
    <Content>
      <Header
        title="Músicas"
        button={
          <AddButton
            text="nova música"
            onClick={() => setIsModalVisible(true)}
          />
        }
      />

      <Box>
        {renderMusics()}
        {isModalVisible && (
          <Modal
            title="Adicionar Música"
            onCancel={() => setIsModalVisible(false)}
          >
            <label className="fileInput">
              Music:
              <span>...</span>
              <input type="file" />
            </label>

            <label>
              Nome:
              <input type="text" />
            </label>
            <label>
              Autor:
              <input type="text" />
            </label>
            <label>
              Estilo:
              <input type="text" />
            </label>
          </Modal>
        )}
      </Box>

      <MusicPlayer />
    </Content>
  );
};
