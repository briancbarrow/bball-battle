import React from 'react';
import FontAwesome from 'react-fontawesome'
import {connect}  from 'react-redux';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <footer>
          <p className="footer-heading">Created by <a target="_blank" href="https://www.briancbarrow.com">Brian Barrow</a></p>
          <a className="contact-link" target="_blank" href="https://github.com/briancbarrow"><FontAwesome name="github" /></a>
          <a className="contact-link" target="_blank" href="https://www.linkedin.com/in/barrowbrian"><FontAwesome name="linkedin" /></a>
          <a className="contact-link" target="_blank" href="https://twitter.com/the_BrianB"><FontAwesome name="twitter" /></a>
        </footer>
      </div>
    )
  }
}

export default connect()(Footer);
