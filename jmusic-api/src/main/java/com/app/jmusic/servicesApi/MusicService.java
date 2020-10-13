package com.app.jmusic.servicesApi;

import java.util.List;

public interface MusicService<ID, MUSIC> {
  MUSIC insertMusic(MUSIC music) throws Exception;
  MUSIC getMusic(ID musicId) throws Exception;
  MUSIC updateMusic(MUSIC music) throws Exception;
  List<MUSIC> getMusic() throws Exception;
  List<MUSIC> getMusics(List<ID> musicIds) throws Exception;
  MUSIC deleteMusic(ID musicId) throws Exception;
}
