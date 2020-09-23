package com.app.jmusic.repositories;

import com.app.jmusic.models.Playlist;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PlaylistRepository extends MongoRepository<Playlist, String> {

}
