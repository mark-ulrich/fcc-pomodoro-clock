import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Timer extends Component {
  /**
   * Convert a time value from seconds to MM:SS format
   */
  convertTimeFormat = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutesStr}:${secondsStr}`;
  };

  /**
   * Render the component
   */
  render() {
    const timerLabel = this.props.isOnBreak ? 'Break' : 'Session';
    const timeRemaining = this.props.timeRemaining;
    return (
      <div>
        <div id='timer-label'>
          <h3>{timerLabel}</h3>
        </div>
        <div id='time-left'>{this.convertTimeFormat(timeRemaining)}</div>
        <audio id='beep' preload='auto' src='./audio/BeepSound.wav' />
      </div>
    );
  }
}

Timer.propTypes = {
  timeRemaining: PropTypes.number.isRequired,
  isOnBreak: PropTypes.bool.isRequired
};

export default Timer;
