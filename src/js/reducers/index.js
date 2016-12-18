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
  playerList: test
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
    else if (action.type === actions.TEST) {
      return state
    }
    return state
}
