import axios from 'axios';

const URL = 'http://localhost:3004';

export const artistList = keywords => {
  const request = axios
    .get(`${URL}/artists?q=${keywords}`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: 'GET_ARTISTS',
    payload: request,
  };
};

export const artistListAll = () => {
  const request = axios
    .get(`${URL}/artists?_limit=6`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: 'GET_ALL_ARTISTS',
    payload: request,
  };
};

export const artistDetail = id => {
  const request = axios
    .get(`${URL}/artists?id=${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: 'GET_ARTISTS_DETAIL',
    payload: request,
  };
};

export const clearArtistDetail = () => ({ type: 'CLEAR_ARTIST_DETAIL', payload: null });
