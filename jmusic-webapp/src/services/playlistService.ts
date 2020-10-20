import api from "./api";

interface Playlist {
  name: string;
  createdBy: string;
  creationDate: Date;
  musics: String[];
}

export function getPlaylist(playlistId: string) {
  return api.get(`/playlist/${playlistId}`);
}

export function getAllPlaylist() {
  return api.get("/playlist/all");
}

export function postPlaylist(playlist: Playlist) {
  return api.post(
    "/playlist",
    { data: playlist },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }
  );
}

export function patchPlaylist(playlist: Playlist) {
  return api.patch("/playlist", { data: playlist });
}

export function deletePlaylist(playlistId: string) {
  return api.delete(`/playlist/${playlistId}`);
}
