package com.app.jmusic.models;

import lombok.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "playlists")
@Getter
@Setter
public class Playlist {
  @Id
  private String id;

  private String name;
  private Date creationDate;
  private List<String> musics;

  List<String> getMusics() {
    return this.musics;
  }

  void setMusics(List<String> newMusics) {
    this.musics = newMusics;
  }
}
