import fetch from 'isomorphic-fetch'

// export const GET_RANDOM_PLAYERS = 'GET_RANDOM_PLAYERS';
// export const getRandomPlayers = (first, second) => ({
//   type: GET_RANDOM_PLAYERS,
//   first,
//   second
// });

export const NEW_MOVIES = 'NEW_MOVIES';
export const newMovies = (first, second) => ({
  type: NEW_MOVIES,
  first,
  second
});

export const NEW_DATA = 'NEW_DATA';
export const newData = (data1, data2) => ({
  type: NEW_DATA,
  data1,
  data2
});

export const COMP_MOVIES = 'COMP_MOVIES';
export const compMovies = (first, second) => ({
  type: COMP_MOVIES,
  first,
  second
});
