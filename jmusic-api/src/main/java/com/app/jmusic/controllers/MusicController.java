package com.app.jmusic.controllers;

import com.app.jmusic.models.Music;
import com.app.jmusic.servicesImpl.MusicServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MusicController {
  @Autowired
  private MusicServiceImpl musicService;

  @PostMapping(path = "/music")
  public ResponseEntity<Music> insertMusic(@RequestBody Music music) throws Exception {
    musicService.insertMusic(music);

    return new ResponseEntity<Music>(music, HttpStatus.OK);
  }

  @GetMapping(path = "/music")
  public ResponseEntity<List<Music>> getMusic(@RequestParam List<String> musicIds) throws Exception {
    List<Music> musics = musicService.getMusics(musicIds);
    return new ResponseEntity<List<Music>>(musics, HttpStatus.OK);
  }

  @GetMapping(path = "/music/{musicId}")
  public ResponseEntity<Music> getMusic(@PathVariable("musicId") String musicId) throws Exception {
    Music music = musicService.getMusic(musicId);
    return new ResponseEntity<Music>(music, HttpStatus.OK);
  }



  @GetMapping(path = "/music/all")
  public ResponseEntity<List<Music>> getMusic() throws Exception {
    List<Music> musics = musicService.getMusic();

    return new ResponseEntity<>(musics, HttpStatus.OK);
  }

  @PatchMapping(path = "/music")
  public ResponseEntity<Music> updateMusic(@RequestBody Music music) throws Exception {
    musicService.updateMusic(music);

    return new ResponseEntity<Music>(music, HttpStatus.OK);
  }

  @DeleteMapping(path = "/music/{musicId}")
  public ResponseEntity<Music> deleteMusic(@PathVariable("musicId") String musicId) throws Exception {
    Music music = musicService.deleteMusic(musicId);

    return new ResponseEntity<Music>(music, HttpStatus.OK);
  }
}
