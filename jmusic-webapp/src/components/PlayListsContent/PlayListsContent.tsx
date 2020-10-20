import React from "react";

import { useHistory } from "react-router-dom";
import { Header, Content, Box, List } from "../UI";
import { MusicItem } from "../MusicList/MusicItem";

import {
  PlaylistProps,
  PlaylistObject,
} from "../../interfaces/PlaylistInterface";

export const PlayListsContent: React.FC<PlaylistProps> = ({
  playlists,
  loading,
}) => {
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
      <Header title="Playlists" extra={extraHeader} />

      <Box>
        <List data={playlists} render={renderMusicList} loading={loading} />
      </Box>
    </Content>
  );
};
