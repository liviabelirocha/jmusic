import React, { useState, ChangeEvent } from "react";

import { Content, Header, Box, Loading, Modal } from "../UI";
import { MusicsContentProps } from "../../interfaces/MusicInterface";
import { MusicList } from "../MusicList/MusicList";
import { AddButton } from "../AddButton/AddButton";

import { postMusic } from "../../services/musicService";

export const MusicsContent: React.FC<MusicsContentProps> = ({
  musics,
  loading,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [file, setFile] = useState<File>();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [style, setStyle] = useState("");
  const [sending, setSending] = useState(false);

  function renderMusics() {
    if (loading) {
      return <Loading />;
    }

    return musics.map(([style, musics]) => (
      <MusicList key={style} type={style} musics={musics} />
    ));
  }

  function handleFiles(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  }

  async function handleSubmit() {
    if (!file) return;
    const data = {
      music: {
        name,
        author,
        style,
      },
      file,
    };
    setSending(true);
    await postMusic(data.music, data.file)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setSending(false);
        setIsModalVisible(false);
      });
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
            onSubmit={handleSubmit}
            loading={sending}
          >
            <label className="fileInput">
              Music:
              <span>{file?.name || "..."}</span>
              <input type="file" onChange={handleFiles} />
            </label>

            <label>
              Nome:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Autor:
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </label>
            <label>
              Estilo:
              <select onChange={(e) => setStyle(e.target.value)} value={style}>
                <option value="" hidden>
                  Selecione um estilo
                </option>
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="classica">Clássica</option>
                <option value="mpb">MPB</option>
              </select>
            </label>
          </Modal>
        )}
      </Box>
    </Content>
  );
};
