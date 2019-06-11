export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_ARTISTS':
      return { ...state, artistList: action.payload };
    case 'GET_ARTISTS':
      return { ...state, artistList: action.payload };
    case 'GET_ARTISTS_DETAIL':
      return { ...state, artistData: action.payload };
    case 'CLEAR_ARTIST_DETAIL':
      return { ...state, artistData: action.payload };
    default:
      return state;
  }
};
