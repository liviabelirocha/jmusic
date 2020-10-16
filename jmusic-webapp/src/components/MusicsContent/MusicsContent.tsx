import React from "react";

import { Content, Header, Box, Loading } from "../UI";
import { MusicsContentProps } from "../../interfaces/MusicInterface";
import { MusicList } from "../MusicList/MusicList";
import { MusicPlayer } from "../MusicPlayer/MusicPlayer";

export const MusicsContent: React.FC<MusicsContentProps> = ({
  musics,
  loading,
}) => {
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
      <Header title="Músicas" />

      <Box>{renderMusics()}</Box>

      <MusicPlayer />
    </Content>
  );
};
