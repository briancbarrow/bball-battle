import React from 'react';
import {connect}  from 'react-redux';

class Options extends React.Component {

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

export default connect(mapStateToProps, null)(Options);
