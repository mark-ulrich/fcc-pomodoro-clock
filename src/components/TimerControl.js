import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TimerControl extends Component {
  render() {
    const startIconClassName = 'far fa-play-circle';
    const stopIconClassName = 'far fa-stop-circle';
    const resetIconClassName = 'fa fa-sync btn-icon';

    const startStopText = this.props.isPaused ? 'Start ' : 'Stop ';
    const startStopIconClass =
      (this.props.isPaused ? startIconClassName : stopIconClassName) +
      ' btn-icon';

    const { togglePause, reset } = this.props.controlMethods;

    return (
      <div id='timer-controls'>
        <button
          className='timer-control-button'
          id='start_stop'
          onClick={togglePause}
        >
          {startStopText}
          <i className={startStopIconClass} />
        </button>
        <button className='timer-control-button' id='reset' onClick={reset}>
          Reset <i className={resetIconClassName} />
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
