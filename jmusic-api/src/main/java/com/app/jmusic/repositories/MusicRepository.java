package com.app.jmusic.repositories;

import com.app.jmusic.models.Music;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MusicRepository extends MongoRepository<Music, String> {

}
