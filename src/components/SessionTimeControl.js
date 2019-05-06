import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SessionTimeControl extends Component {
  render() {
    return (
      <div>
        <h3 id='session-label'>Session Length</h3>
        <div id='session-length'>{this.props.sessionLength}</div>
        <div id='session-increment'>
          <i className='fa fa-arrow-up' />
        </div>
        <div id='session-decrement'>
          <i className='fa fa-arrow-down' />
        </div>
      </div>
    );
  }
}

SessionTimeControl.propTypes = {
  sessionLength: PropTypes.number.isRequired,
  controlMethods: PropTypes.object.isRequired
};

export default SessionTimeControl;
