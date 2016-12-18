import React, { Component } from 'react';
import {connect}  from 'react-redux';
import * as actions from './js/actions/index';
import './App.css';
import Player from './js/components/player';
import { Card, Button } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const player1 = event.target.player1.value
    const player2 = event.target.player2.value
    let oneIndex = this.props.playerList.findIndex(player => player.firstName === player1)
    let twoIndex = this.props.playerList.findIndex(player => player.firstName === player2)
    this.props.newId(this.props.playerList[oneIndex].playerId, "data1")
    this.props.newId(this.props.playerList[twoIndex].playerId, "data2")
  }

  render() {
    return (
      <div className="App">
        <h1 className="main-header">BBALL BATTLE</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="player1" placeholder="Enter Player 1" required/>
          <input type="text" name="player2" placeholder="Enter Player 2" required/>
          <Button positive type="submit">Submit</Button>
        </form>
        <Card.Group itemsPerRow={2}>
          {(this.props.id1) ? <Player id={this.props.id1} pos="data1"/> : <Player id="203518" pos="data1"/>}
          {(this.props.id1) ? <Player id={this.props.id2} pos="data2"/> : <Player id="203500" pos="data2"/>}

        </Card.Group>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newId: (id, pos) => {
      return dispatch(actions.newId(id, pos))
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    id1: state.id1,
    id2: state.id2,
    playerList: state.playerList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
