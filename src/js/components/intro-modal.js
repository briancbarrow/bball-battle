import React, { Component } from 'react'
import {connect} from 'react-redux'
import  * as actions from '../actions/index'

class IntroModal extends Component {

  render() {
    return(
      <div className="intro-modal">
        <h1>Welcome to the BBALL BATTLE</h1>
        <p>Just plug in the names of your favorite NBA stars to compare their stats.</p>
        <p>Settle once and for all the disputes between which star is better.</p>
        <p>(The data from the NBA API takes a while to load so be patient please)</p>
        <button className="close-modal" onClick={this.props.updateModal}>Go To Battle App</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateModal: () => {
      return dispatch(actions.updateModal())
    }
  }
}

export default connect(null, mapDispatchToProps)(IntroModal);
