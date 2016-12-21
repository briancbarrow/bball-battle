import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Player from './player';
import store from '../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Player id="20" pos="data1"/>
    </Provider>
    , div);
});
