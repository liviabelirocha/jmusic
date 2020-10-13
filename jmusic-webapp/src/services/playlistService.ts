import api from './api';

interface Playlist {
  name: string;
  creationDate: Date;
  musics: String[];
}

export function getPlaylist(playlistId: string) {
  return api.get(`/playlist/${playlistId}`);
}

export function getAllPlaylist() {
  return api.get('/playlist/all');
}

export function postPlaylist(playlist: Playlist) {
  return api.post('/playlist', { data: playlist });
}

export function patchPlaylist(playlist: Playlist) {
  return api.patch('/playlist', { data: playlist });
}

export function deletePlaylist(playlistId: string) {
  return api.delete(`/playlist/${playlistId}`);
}
