import { MusicObject } from './MusicInterface';

export interface PlaylistObject {
  id: string;
  name: string;
  creationDate: null | string;
  musics: string[];
}

export interface PlaylistProps {
  playlists: PlaylistObject[];
  loading: boolean;
}

export interface PlaylistHeaderInfoProps { 
  createdBy: String,
  amountOfMusics: number,
  duration: String,
}

export interface PlaylistMusicsProps {
  musics: MusicObject[];
  loading: boolean;
}