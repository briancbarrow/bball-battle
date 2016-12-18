import React, { Component } from 'react';
import {connect}  from 'react-redux';
// import * as actions from './js/actions/index';
import './App.css';
import Player from './js/components/player';
import { Card } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
      super(props);
      // this.guessNumber = this.guessNumber.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.updateDirFeedback = this.updateDirFeedback.bind(this);
      // this.updateDistFeedback = this.updateDistFeedback.bind(this);
      // this.updateDistance = this.updateDistance.bind(this);
      // this.getFewest = this.getFewest.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let arr = [];

  }

  render() {
    return (
      <div className="App">

        <h1 className="main-header">BBALL BATTLE</h1>
        <Card.Group itemsPerRow={2}>
          <Player id="201566" pos="data1"/>
          <Player id="201565" pos="data2"/>
        </Card.Group>
        /*<form onSubmit={this.handleSubmit}>
            <button type="submit">Submit</button>
        </form>*/
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     insertInfo: (playerArr) => {
//       return dispatch(actions.insertInfo(playerArr))
//     }
//   }
// }

export default connect()(App);
