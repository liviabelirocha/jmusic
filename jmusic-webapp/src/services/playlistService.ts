import api from "./api";

import { PlaylistObject, PlaylistView } from '../interfaces/PlaylistInterface';



export function getPlaylist(playlistId: string) {
  return api.get(`/playlist/${playlistId}`);
}

export function getAllPlaylist() {
  return api.get("/playlist/all");
}

export function postPlaylist(playlist: PlaylistView) {
  return api.post("/playlist", playlist);
}

export function patchPlaylist(playlist: PlaylistObject) {
  return api.patch("/playlist", playlist);
}

export function deletePlaylist(playlistId: string) {
  return api.delete(`/playlist/${playlistId}`);
}
