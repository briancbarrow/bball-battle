import React, { Component } from 'react';
import {connect}  from 'react-redux';
// import * as actions from './js/actions/index';
import './App.css';
import Player from './js/components/player';
import { Card } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1 className="main-header">BBALL BATTLE</h1>
        <Card.Group itemsPerRow={2}>
          <Player id="201566" pos="data1"/>
          <Player id="201565" pos="data2"/>
        </Card.Group>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     advSplits: (playerId) => {
//       return dispatch(actions.advSplits(playerId))
//     }
//   }
// }

export default connect()(App);
