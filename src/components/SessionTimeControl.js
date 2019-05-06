import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SessionTimeControl extends Component {
  render() {
    const { increment, decrement } = this.props.controlMethods;

    return (
      <div className='length-control-container' id='session-controls'>
        <h3 id='session-label'>Session Length</h3>
        <div
          className='control arrow-control'
          id='session-decrement'
          onClick={decrement}
        >
          <i className='fa fa-arrow-down' />
        </div>
        <div className='control' id='session-length'>
          {this.props.sessionLength}
        </div>
        <div
          className='control arrow-control'
          id='session-increment'
          onClick={increment}
        >
          <i className='fa fa-arrow-up' />
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
