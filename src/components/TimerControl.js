import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TimerControl extends Component {
  render() {
    const startStopText = this.props.isPaused ? 'Start' : 'Stop';
    const { togglePause, reset } = this.props.controlMethods;

    return (
      <div>
        <button id='start_stop' onClick={togglePause}>
          {startStopText}
        </button>
        <button id='reset' onClick={reset}>
          Reset
        </button>
      </div>
    );
  }
}

TimerControl.propTypes = {
  controlMethods: PropTypes.object.isRequired,
  isPaused: PropTypes.bool.isRequired
};

export default TimerControl;
