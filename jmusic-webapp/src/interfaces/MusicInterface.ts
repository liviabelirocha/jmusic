export interface MusicObject {
  id: string;
  name: string;
  author: string;
  style: string;
  creationDate: string | null;
}

export interface MusicListProps {
  musicType?: string,
  musics?: MusicObject[],
}