package com.app.jmusic.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "musics")
@Getter
@Setter
public class Music {
  @Id
  private String id;

  private String name;
  private String author;
  private String style;
  private Date creationDate;
}
