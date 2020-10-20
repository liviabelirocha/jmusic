import { MusicObject } from './MusicInterface';

export interface PlaylistView {
  name: string;
  createdBy: string;
  creationDate: Date;
  musics: String[];
}

export interface PlaylistObject {
  id: string;
  name: string;
  createdBy: string;
  creationDate: null | string;
  musics: string[];
}

export interface PlaylistProps {
  playlists: PlaylistObject[];
  loading: boolean;
  onDelete?: (id: string) => void
}

export interface PlaylistHeaderInfoProps { 
  createdBy: String,
  amountOfMusics: number,
  duration: String,
}

export interface PlaylistMusicsProps {
  playlist: PlaylistObject | null;
  musics: MusicObject[];
  loadingPlaylist: boolean;
  loadingMusics: boolean;
  onDelete?: (id: string) => void;
}