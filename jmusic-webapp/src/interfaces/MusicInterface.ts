export interface MusicObject {
  id: string;
  name: string;
  author: string;
  style: string;
  creationDate: string | null;
}

export interface MusicListProps {
  type: string;
  musics: MusicObject[];
  onDelete?: (id: string) => void;
  onAdd?: (id: string) => void;
}

export type MusicTuple = [string, MusicObject[]]; 

export interface MusicsContentProps {
  musics: MusicTuple[];
  loading: boolean;
  onDelete?: (id: string) => void;
}
