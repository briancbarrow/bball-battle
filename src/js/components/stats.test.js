import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Stats from './stats';
import store from '../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const data = [{efgPct: .5, defRating: 100.7, offRating: 99, astTo: 2.06, pie: 0.19}]
  const player = [{displayFirstLast: "Kevin Love"}]
  ReactDOM.render(
    <Provider store={store}>
      <Stats pos="data1" data={data} playerInfo={player}/>
    </Provider>
    , div);
});
