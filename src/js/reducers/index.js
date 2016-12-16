

const initialState = {
  movie1: null,
  movie2: null,
  data1: [],
  data2: [],
  winner: null

}

export const battleReducer = (state=initialState, action) => {
  if (action.type === actions.NEW_MOVIES) {
      let arr = [];
      arr.push(action.first, action.second);
      return Object.assign({}, state, {movie1: arr[0], movie2: arr[1]})
    }
    else if (action.type === actions.NEW_DATA) {
      return Object.assign({}, state, {data1: action.data1, data2: action.data2})
    }
}
