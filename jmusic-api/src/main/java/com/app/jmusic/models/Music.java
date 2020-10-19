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

  public String getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getAuthor() {
    return author;
  }

  public String getStyle() {
    return style;
  }

  public Date getCreationDate() {
    return creationDate;
  }

  public void setId(String id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public void setCreationDate(Date creationDate) {
    this.creationDate = creationDate;
  }
}
