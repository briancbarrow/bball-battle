import React from 'react';
import {connect}  from 'react-redux';
import * as actions from '../actions/index';
import Stats from './stats';

class Player extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentWillMount() {
    this.props.advSplits(this.props.id, this.props.pos)
    this.props.playerInfo(this.props.id, this.props.pos)
  }

  render() {
    return (
      <Stats data={(this.props.pos === "data1") ? this.props.data1 : this.props.data2} playerInfo={(this.props.pos === "data1") ? this.props.player1 : this.props.player2}/>
    )
  }
}


  const mapDispatchToProps = (dispatch) => {
    return {
      advSplits: (playerId, pos) => {
        return dispatch(actions.advSplits(playerId, pos))
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
        data1: state.data1,
        data2: state.data2,
        player1: state.player1,
        player2: state.player2
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Player);
