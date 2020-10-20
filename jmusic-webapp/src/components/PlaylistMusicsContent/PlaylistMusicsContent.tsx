import React from "react";

import { MusicItem } from "../MusicList/MusicItem";
import { Content, Header, Box, List, Loading, Trash } from "../UI";
import { PlaylistHeaderInfo } from "../PlaylistHeaderInfo/PlaylistHeaderInfo";

import { PlaylistMusicsProps } from "../../interfaces/PlaylistInterface";
import { MusicObject } from "../../interfaces/MusicInterface";

export const PlaylistMusicsContent: React.FC<PlaylistMusicsProps> = ({
  playlist,
  musics,
  loadingPlaylist,
  loadingMusics,
  onDelete
}) => {

  function handleDelete(musicId: string) {
    if (onDelete) {
      onDelete(musicId);
    }
  }

  function renderMusicItems(music: MusicObject) {
    return (
      <MusicItem
        key={music.id} 
        name={`${music.name} - ${music.author}`}
        extras={[
          <Trash key={`trash${music.id}`} onClick={() => handleDelete(music.id)} />
        ]}
      />
    );
  }

  function renderHeader() {
    if (loadingPlaylist) {
      return <Loading />;
    }

    if (playlist) {
      return (
        <Header
          title={playlist.name}
          extra={
            <PlaylistHeaderInfo
              createdBy={playlist.createdBy}
              amountOfMusics={playlist.musics.length}
              duration={"00h"}
            />
          }
        />
      );
    }
  }

  return (
    <Content>
      {renderHeader()}

      <Box>
        <List data={musics} render={renderMusicItems} loading={loadingMusics} />
      </Box>
    </Content>
  );
};
