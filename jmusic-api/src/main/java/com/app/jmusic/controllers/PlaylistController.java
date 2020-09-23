package com.app.jmusic.controllers;

import com.app.jmusic.models.Playlist;
import com.app.jmusic.servicesImpl.PlaylistServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PlaylistController {
  @Autowired
  private PlaylistServiceImpl playlistService;

  @PostMapping(path = "/playlist")
  public ResponseEntity<Playlist> insertPlaylist(@RequestBody Playlist playlist) throws Exception {
    Playlist playlistResp = playlistService.insertPlaylist(playlist);

    return new ResponseEntity<Playlist>(playlistResp, HttpStatus.OK);
  }

  @GetMapping(path = "/playlist")
  public ResponseEntity<Playlist> getPlaylist(@RequestParam("id") String playlistId) throws Exception {
    Playlist playlist = playlistService.getPlaylist(playlistId);

    return new ResponseEntity<Playlist>(playlist, HttpStatus.OK);
  }

  @GetMapping(path = "/playlist/all")
  public ResponseEntity<List<Playlist>> getPlaylist() throws Exception {
    List<Playlist> playlists = playlistService.getPlaylist();

    return new ResponseEntity<List<Playlist>>(playlists, HttpStatus.OK);
  }

  @PatchMapping("/playlist")
  public ResponseEntity<Playlist> updatePlaylist(@RequestBody Playlist playlist) throws Exception {
    Playlist playlistResp = playlistService.updatePlaylist(playlist);

    return new ResponseEntity<Playlist>(playlistResp, HttpStatus.OK);
  }

  @DeleteMapping(path = "/playlist")
  public ResponseEntity<Playlist> deletePlaylist(@RequestParam("id") String playlistId) throws Exception {
    Playlist playlist = playlistService.deletePlaylist(playlistId);

    return new ResponseEntity<Playlist>(playlist, HttpStatus.OK);
  }
}
