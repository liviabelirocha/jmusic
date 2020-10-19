package com.app.jmusic.controllers;

import com.app.jmusic.models.Music;
import com.app.jmusic.servicesImpl.MusicServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.util.List;

@RestController
public class MusicController {
  @Autowired
  private MusicServiceImpl musicService;

  @PostMapping(path = "/music")
  public ResponseEntity<Music> insertMusic(@RequestParam("music") String music, @RequestParam("file") MultipartFile file) throws Exception {
    ObjectMapper mapper = new ObjectMapper();
    Music mappedMusic = mapper.readValue(music, Music.class);

    Music musicResponse = musicService.insertMusic(mappedMusic, file);
    return new ResponseEntity<Music>(musicResponse, HttpStatus.OK);
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

  @GetMapping(path= "/music/file/{musicId}")
  public void getMusicFile(@PathVariable("musicId") String musicId, HttpServletResponse response) throws Exception {
    InputStream musicFile = musicService.getMusicFile(musicId);

    FileCopyUtils.copy(musicFile, response.getOutputStream());
  }

  @GetMapping(path = "/music/all")
  public ResponseEntity<List<Music>> getMusic() throws Exception {
    List<Music> musics = musicService.getMusic();

    return new ResponseEntity<>(musics, HttpStatus.OK);
  }

  @PatchMapping(path = "/music")
  public ResponseEntity<Music> updateMusic(@RequestBody Music music) throws Exception {
    Music musicResponse = musicService.updateMusic(music);

    return new ResponseEntity<Music>(musicResponse, HttpStatus.OK);
  }

  @DeleteMapping(path = "/music/{musicId}")
  public ResponseEntity<Music> deleteMusic(@PathVariable("musicId") String musicId) throws Exception {
    Music music = musicService.deleteMusic(musicId);

    return new ResponseEntity<Music>(music, HttpStatus.OK);
  }

  private byte[] toBytes(InputStream in) throws IOException {
    int iRead;
    byte[] data = new byte[1024];
    ByteArrayOutputStream buffer = new ByteArrayOutputStream();

    while ((iRead = in.read(data, 0, data.length)) != -1) {
      buffer.write(data, 0, iRead);
    }

    buffer.flush();
    return buffer.toByteArray();
  }
}
