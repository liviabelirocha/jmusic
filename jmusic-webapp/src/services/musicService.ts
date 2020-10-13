import api from './api';

interface Music {
  name: string;
  author: string;
  style: string;
}

export function getMusic(musicId: string) {
  return api.get(`/music/${musicId}`);
}

export function getMusicsByIds(musicIds: string[]) {
  function createIdsRequest(str: string, cur: string, curInd: number, arr: string[]) {
    if (curInd === arr.length - 1) {
      return `${str}musicIds=${cur}`;
    }

    return `${str}musicIds=${cur}&`;
  }


  return api.get(`/music?${musicIds.reduce(createIdsRequest, "")}`);
}

export function getAllMusic() {
  return api.get('/music/all');
}

export function postMusic(music: Music) {
  return api.post('/music', { data: music });
}

export function patchMusic(music: Music) {
  return api.patch('/music', { data: music });
}

export function deleteMusic(musicId: string) {
  return api.delete(`/music/${musicId}`);
}
