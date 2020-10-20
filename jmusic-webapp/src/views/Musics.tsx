import React, { useEffect, useState, useCallback } from 'react';

import { MusicsContent } from '../components/MusicsContent/MusicsContent';
import { getAllMusic, deleteMusic } from '../services/musicService';

import { MusicObject, MusicTuple } from '../interfaces/MusicInterface';

export const Musics = () => {
  const [musics, setMusics] = useState<MusicTuple[]>([]);
  const [loading, setLoading] = useState(false);

  const mapMusics = useCallback((musics) => {
    function transformMusics(map: Map<String, MusicObject[]>, cur: MusicObject) {
      const { style } = cur;

      if (map.has(style)) {
        map.get(style)?.push(cur);
      } else {
        map.set(style, [ cur ]);
      }

      return map;
    }

    const mapEntries = musics
      .reduce(transformMusics, new Map())
      .entries()

    return Array.from(mapEntries) as MusicTuple[];
  }, []);

  useEffect(() => {
    setLoading(true);
    getAllMusic()
      .then(res => res.data)
      .then(musics => mapMusics(musics))
      .then(musics => setMusics(musics))
      .finally(() => setLoading(false));
  }, [mapMusics]);

  function handleDelete(musicId: string) {
    deleteMusic(musicId)
      .then(res => res.data)
      .then(data => {
        const newMusics = musics
          .map(([style, music]) => [style, music.filter(m => m.id !== data.id)] as MusicTuple)

        setMusics(newMusics);
      });
  }

  return (
    <MusicsContent
      musics={musics}
      loading={loading}
      onDelete={handleDelete}  
    />
  );
}
