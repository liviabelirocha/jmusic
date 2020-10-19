package com.app.jmusic.servicesApi;

import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.List;

public interface MusicService<ID, MUSIC> {
  MUSIC insertMusic(MUSIC music, MultipartFile file) throws Exception;
  MUSIC getMusic(ID musicId) throws Exception;
  InputStream getMusicFile(ID musicId) throws Exception;
  MUSIC updateMusic(MUSIC music) throws Exception;
  List<MUSIC> getMusic() throws Exception;
  List<MUSIC> getMusics(List<ID> musicIds) throws Exception;
  MUSIC deleteMusic(ID musicId) throws Exception;
}
