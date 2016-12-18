import React, { Component } from 'react';
import {connect}  from 'react-redux';
import * as actions from './js/actions/index';
import './App.css';
import Player from './js/components/player';
import Options from './js/components/ListOptions';
import { Card, Button } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearData()
    const player1 = event.target.player1.value
    const player2 = event.target.player2.value
    let oneIndex = this.props.playerList.findIndex(player => {
      // console.log('testing', player.firstName + ' ' + player.lastName)
      return player.firstName + ' ' +player.lastName === player1
    })

    let twoIndex = this.props.playerList.findIndex(player => {
      return player.firstName + ' ' + player.lastName === player2
    })
    console.log("State ID", this.props.id1)
    this.props.newId(this.props.playerList[oneIndex].playerId, "data1")
    this.props.playerInfo(this.props.playerList[oneIndex].playerId, "data1")
    this.props.advSplits(this.props.playerList[oneIndex].playerId, "data1")
    this.props.newId(this.props.playerList[twoIndex].playerId, "data2")
    this.props.playerInfo(this.props.playerList[twoIndex].playerId, "data2")
    this.props.advSplits(this.props.playerList[twoIndex].playerId, "data2")
  }

  render(props) {
    console.log("Render State ID1", this.props.id1, "Render State ID2", this.props.id2)
    return (
      <div className="App">
        <h1 className="main-header">BBALL BATTLE</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="player1" list="player1-list" placeholder="Enter Player 1" required/>
          <datalist id="player1-list">
            <Options />
          </datalist>
          <input type="text" name="player2" list="player2-list" placeholder="Enter Player 2" required/>
          <datalist id="player2-list">
            <Options />
          </datalist>
          <Button positive type="submit">Submit</Button>
        </form>
        <Card.Group itemsPerRow={2}>
        {console.log(this.props.id1, this.props.id2)}
          {(this.props.id1) ? <Player id={this.props.id1} pos="data1"/> : ''}
          {(this.props.id2) ? <Player id={this.props.id2} pos="data2"/> : ''}
        </Card.Group>
      </div>
    );
  }
}
// <Player id="203518" pos="data1"/>
//<Player id="203500" pos="data2"/>

const mapDispatchToProps = (dispatch) => {
  return {
    advSplits: (playerId, pos) => {
      return dispatch(actions.advSplits(playerId, pos))
    },
    newId: (id, pos) => {
      return dispatch(actions.newId(id, pos))
    },
    newData: (id, pos) => {
      return dispatch(actions.newData(id, pos))
    },
    clearData: () => {
      return dispatch(actions.clearData())
    },
    playerInfo: (playerId, pos) => {
      return dispatch(actions.playerInfo(playerId, pos))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    id1: state.id1,
    id2: state.id2,
    player1: state.player1,
    player2: state.player2,
    playerList: state.playerList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
