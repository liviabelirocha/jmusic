package com.app.jmusic.servicesImpl;

import com.app.jmusic.models.Music;
import com.app.jmusic.repositories.MusicRepository;
import com.app.jmusic.servicesApi.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MusicServiceImpl implements MusicService<String, Music> {
  @Autowired
  private MusicRepository musicRepository;

  @Override
  public Music insertMusic(Music music) throws Exception {
    return musicRepository.save(music);
  };

  @Override
  public Music getMusic(String musicId) throws Exception {
    Optional<Music> music = musicRepository.findById(musicId);

    if (music.isEmpty()) {
      return null;
    }

    return music.get();
  };

  @Override
  public List<Music> getMusic() throws Exception {
    return musicRepository.findAll();
  };

  @Override
  public List<Music> getMusics(List<String> musicIds) throws Exception {
    Iterable<Music> musicsIterable = musicRepository.findAllById(musicIds);

    List<Music> musics = new ArrayList<Music>();
    musicsIterable.forEach(musics::add);

    return musics;
  }


  @Override
  public Music updateMusic(Music music) throws Exception {
    return musicRepository.save(music);
  }

  @Override
  public Music deleteMusic(String musicId) throws Exception {
    Optional<Music> music = musicRepository.findById(musicId);

    if (music.isEmpty()) {
      return null;
    }

    Music someMusic = music.get();

    musicRepository.deleteById(musicId);
    return someMusic;
  };

}
