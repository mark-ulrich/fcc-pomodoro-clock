import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Timer extends Component {
  /**
   * Convert a time value from seconds to MM:SS format
   */
  convertTimeFormat = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds}`;
  };

  render() {
    const timeRemaining = this.props.timeRemaining;
    return (
      <div>
        <div id='timer-label'>
          <h3>Session</h3>
        </div>
        <div id='time-left'>{this.convertTimeFormat(timeRemaining)}</div>
      </div>
    );
  }
}

Timer.propTypes = {
  timeRemaining: PropTypes.number.isRequired
};

export default Timer;
