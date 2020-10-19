package com.app.jmusic.servicesImpl;

import com.app.jmusic.models.Music;
import com.app.jmusic.repositories.MusicRepository;
import com.app.jmusic.servicesApi.MusicService;
import com.mongodb.client.gridfs.model.GridFSFile;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MusicServiceImpl implements MusicService<String, Music> {
  @Autowired
  private MusicRepository musicRepository;
  @Autowired
  private GridFsTemplate gridFsTemplate;
  @Autowired
  private GridFsOperations gridFsOperations;

  @Override
  public Music insertMusic(Music music, MultipartFile file) throws Exception {
      String id = insertMusicFile(file);
      music.setId(id);

      return insertMusicContent(music);
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
  public InputStream getMusicFile(String musicId) throws Exception {
    GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(musicId)));

    if (file != null) {
      return gridFsOperations.getResource(file).getInputStream();
    }

    return null;
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

  private Music insertMusicContent(Music music) throws Exception {
    return musicRepository.save(music);
  }

  private String insertMusicFile(MultipartFile file) throws Exception {
    ObjectId id = gridFsTemplate.store(file.getInputStream(), file.getName(), file.getContentType());

    return id.toString();
  }

}
