import React from 'react';
import {connect}  from 'react-redux';
// import * as actions from '../actions/index';
// import Stats from './stats';

class Option extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  // getDatalist() {
  //   let options = '';
  //   let pList = this.props.playerList;
  //   for(let i = 0; i < this.pList.length; i++) {
  //     options += '<option value="' + pList[i].firstName + ' ' + plist[i].lastName +'" />'
  //   }
  // }

  render() {
    return (
      <div>
        {this.props.playerList.map((player, i) => {
          return <option key={i} value={player.firstName + ' ' + player.lastName}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    id1: state.id1,
    id2: state.id2,
    playerList: state.playerList
  }
}

export default connect(mapStateToProps, null)(Option);
