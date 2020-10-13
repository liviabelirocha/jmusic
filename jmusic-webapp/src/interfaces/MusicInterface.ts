export interface MusicObject {
  id: string;
  name: string;
  author: string;
  style: string;
  creationDate: string | null;
}

export interface MusicListProps {
  type: string,
  musics: MusicObject[],
}

export type MusicTuple = [string, MusicObject[]]; 

export interface MusicsContentProps {
  musics: MusicTuple[],
  loading: boolean;
}
