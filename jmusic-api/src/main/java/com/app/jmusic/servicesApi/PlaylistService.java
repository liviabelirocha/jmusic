package com.app.jmusic.servicesApi;

import com.app.jmusic.models.Playlist;

import java.util.List;

public interface PlaylistService<ID, PL> {
  PL insertPlaylist(Playlist playlist) throws Exception;
  PL getPlaylist(ID playlistId) throws Exception;
  List<PL> getPlaylist() throws Exception;
  PL updatePlaylist(Playlist playlist) throws Exception;
  PL deletePlaylist(ID playlistId) throws Exception;
}
