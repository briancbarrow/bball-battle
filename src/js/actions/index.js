// import fetch from 'isomorphic-fetch'
import axios from 'axios'

// export const GET_RANDOM_PLAYERS = 'GET_RANDOM_PLAYERS';
// export const getRandomPlayers = (first, second) => ({
//   type: GET_RANDOM_PLAYERS,
//   first,
//   second
// });

export const NEW_PLAYERS = 'NEW_PLAYERS';
export const newPlayers = (data, pos) => ({
  type: NEW_PLAYERS,
  data,
  pos
});

export const NEW_DATA = 'NEW_DATA';
export const newData = (data, pos) => ({
  type: NEW_DATA,
  data,
  pos
});

export const COMP_PLAYERS = 'COMP_PLAYERS';
export const compPlayers = (first, second) => ({
  type: COMP_PLAYERS,
  first,
  second
});

export const TEST = 'TEST';
export const test = (data) => ({
  type: TEST,
  data
});

export const advSplits = (playerId, pos) => {
  return dispatch => {
    return axios.post('https://bball-server.herokuapp.com/playerSplits', {
      Season: "2016-17",
      SeasonType: "Regular Season",
      LeagueID: "00",
      PlayerID: playerId,
      MeasureType: "Advanced",
      PerMode: "Per48",
      PlusMinus: "N",
      PaceAdjust: "N",
      Rank: "N",
      Outcome: "",
      Location: "",
      Month: "0",
      SeasonSegment: "",
      DateFrom: "",
      DateTo: "",
      OpponentTeamID: "0",
      VsConference: "",
      VsDivision: "",
      GameSegment: "",
      Period: "0",
      LastNGames: "0"
    })
    .then(res => dispatch(newData(res.data, pos)))
  }
}

export const playerInfo = (playerId, pos) => {
  return dispatch => {
    return axios.post('https://bball-server.herokuapp.com/playerInfo', {
      SeasonType: "Regular Season",
      LeagueID: "00",
      PlayerID: playerId
    })
    .then(res => dispatch(newPlayers(res.data, pos)))
  }
}

// export const insertInfo = () => {
//   return dispatch => {
//     return axios.post('http://stats.nba.com/stats/commonallplayers', {
//       Season: "2016-17",
//       LeagueID: "00",
//       IsOnlyCurrentSeason: "1"
//     })
//     .then(res => {
//       dispatch(insertInfo(playerArr))
//     })
//   }
// }
