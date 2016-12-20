import * as actions from '../actions/index';
import {test} from '../test'

const initialState = {
  id1: null,
  id2: null,
  player1: [{}],
  player2: [{}],
  data1: [{}],
  data2: [{}],
  winner: null,
  playerList: test,
  stats: [
    {stat: "Effective FG%", value: "efgPct"},
    {stat: "Defensive Rating", value: "defRating"},
    {stat: "Offensive Rating", value: "offRating"},
    {stat: "Assist/TO", value: "astTo"},
    {stat: "PIE", value: "pie"}
  ]
}

export const battleReducer = (state=initialState, action) => {
  if (action.type === actions.NEW_PLAYERS) {
    let obj = {}
    if(action.pos === "data1") {
      obj = {player1: action.data}
    } else {
      obj = {player2: action.data}
    }
    return Object.assign({}, state, obj)
    }
    else if (action.type === actions.NEW_DATA) {
      let obj = {}
      if(action.pos === "data1") {
        obj = {data1: action.data}
      } else {
        obj = {data2: action.data}
      }
      return Object.assign({}, state, obj)
    }
    else if (action.type === actions.NEW_ID) {
      let obj = {}
      if(action.pos === "data1") {
        obj = {id1: action.id}
      } else {
        obj = {id2: action.id}
      }
      return Object.assign({}, state, obj)
    }
    else if (action.type === actions.CLEAR_DATA) {
      return Object.assign({}, state, {data1: [{}], data2: [{}], id1: null, id2: null, winner: null})
    }
    else if (action.type === actions.UPDATE_WINNER) {
      return Object.assign({}, state, {winner: action.winner})
    }
    else if (action.type === actions.TEST) {
      return state
    }
    return state
}
