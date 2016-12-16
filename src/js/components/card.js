import React from 'react';
import {connect}  from 'react-redux';
import * as actions from '../actions/index';

class Card extends React.Component {


  render() {
    this
  }

  const mapStateToProps = (state) => {
    return {
        movie1: state.movie1,
        movie2: state.movie2,
        data1: state.data1,
        data2: state.data2
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
