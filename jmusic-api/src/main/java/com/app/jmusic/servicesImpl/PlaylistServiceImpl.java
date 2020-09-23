package com.app.jmusic.servicesImpl;

import com.app.jmusic.models.Music;
import com.app.jmusic.models.Playlist;
import com.app.jmusic.repositories.MusicRepository;
import com.app.jmusic.repositories.PlaylistRepository;
import com.app.jmusic.servicesApi.PlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlaylistServiceImpl implements PlaylistService<String, Playlist> {
  @Autowired
  private PlaylistRepository playlistRepository;
  @Autowired
  private MusicRepository musicRepository;

  @Override
  public Playlist insertPlaylist(Playlist playlist) throws Exception {
    return playlistRepository.save(playlist);
  }

  @Override
  public Playlist getPlaylist(String playlistId) throws Exception {
    Optional<Playlist> playlist = playlistRepository.findById(playlistId);

    if (playlist.isEmpty()) {
      return null;
    }

    return playlist.get();
  }

  @Override
  public List<Playlist> getPlaylist() throws Exception {
    return playlistRepository.findAll();
  }

  @Override
  public Playlist updatePlaylist(Playlist playlist) throws Exception {
    return playlistRepository.save(playlist);
  }

  @Override
  public Playlist deletePlaylist(String playlistId) throws Exception {
    Optional<Playlist> playlist = playlistRepository.findById(playlistId);

    if (playlist.isEmpty()) {
      return null;
    }

    playlistRepository.deleteById(playlistId);
    return playlist.get();
  }
}
