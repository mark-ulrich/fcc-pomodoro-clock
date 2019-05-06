import React, { Component } from 'react';

import Timer from './Timer';
import TimerControl from './TimerControl';
import SessionTimeControl from './SessionTimeControl';
import BreakTimeControl from './BreakTimeControl';

/*
 *  CONSTANTS
 */
const DEFAULT_SESSION_LENGTH = 25;
const DEFAULT_BREAK_LENGTH = 5;
const MIN_LENGTH = 1;
const MAX_LENGTH = 60;

export class PomodoroClockApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionLength: DEFAULT_SESSION_LENGTH,
      breakLength: DEFAULT_BREAK_LENGTH,
      timeRemaining: DEFAULT_SESSION_LENGTH * 60,
      isOnBreak: false,
      isPaused: true
    };
  }

  componentDidMount() {
    this.beepClip = document.querySelector('#beep');
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentWillUpdate() {
    if (this.state.timeRemaining <= 0) {
      this.toggleBreak();
    } else if (this.state.timeRemaining === 1) {
      this.beepClip.play();
    }
  }

  tick = () => {
    if (this.state.isPaused) return;

    this.setState({ timeRemaining: this.state.timeRemaining - 1 });
  };

  reset = () => {
    this.beepClip.pause();
    this.beepClip.currentTime = 0;

    this.setState({
      sessionLength: DEFAULT_SESSION_LENGTH,
      breakLength: DEFAULT_BREAK_LENGTH,
      timeRemaining: DEFAULT_SESSION_LENGTH * 60,
      isOnBreak: false,
      isPaused: true
    });
  };

  toggleBreak = () => {
    const isOnBreak = !this.state.isOnBreak;
    const timeRemaining =
      (isOnBreak ? this.state.breakLength : this.state.sessionLength) * 60;
    this.setState({ isOnBreak, timeRemaining });
  };

  togglePause = () => {
    const isPaused = !this.state.isPaused;
    this.setState({ isPaused });
  };

  timerControlMethods = {
    reset: this.reset,
    togglePause: this.togglePause
  };

  incrementSessionLength = () => {
    const sessionLength = Math.min(this.state.sessionLength + 1, MAX_LENGTH);
    this.updateSessionLength(sessionLength);
  };

  decrementSessionLength = () => {
    const sessionLength = Math.max(this.state.sessionLength - 1, MIN_LENGTH);
    this.updateSessionLength(sessionLength);
  };

  updateSessionLength = sessionLength => {
    if (!this.state.isPaused) return;
    this.setState({
      sessionLength
    });
    if (!this.state.isOnBreak) {
      this.setState({ timeRemaining: sessionLength * 60 });
    }
  };

  incrementBreakLength = () => {
    const breakLength = Math.min(this.state.breakLength + 1, MAX_LENGTH);
    this.updateBreakLength(breakLength);
  };

  decrementBreakLength = () => {
    const breakLength = Math.max(this.state.breakLength - 1, MIN_LENGTH);
    this.updateBreakLength(breakLength);
  };

  updateBreakLength = breakLength => {
    if (!this.state.isPaused) return;
    this.setState({
      breakLength
    });
    if (this.state.isOnBreak) {
      this.setState({ timeRemaining: breakLength * 60 });
    }
  };

  /*
   *  Object containers for increment/decrement methods. For convenience
   *  when passing as properties.
   */
  sessionMethods = {
    increment: this.incrementSessionLength,
    decrement: this.decrementSessionLength
  };

  breakMethods = {
    increment: this.incrementBreakLength,
    decrement: this.decrementBreakLength
  };

  /**
   * Render component
   */
  render() {
    const timeRemaining = this.state.timeRemaining;
    return (
      <div>
        <BreakTimeControl
          breakLength={this.state.breakLength}
          controlMethods={this.breakMethods}
        />
        <SessionTimeControl
          sessionLength={this.state.sessionLength}
          controlMethods={this.sessionMethods}
        />
        <Timer timeRemaining={timeRemaining} isOnBreak={this.state.isOnBreak} />
        <TimerControl
          isPaused={this.state.isPaused}
          controlMethods={this.timerControlMethods}
        />
      </div>
    );
  }
}

export default PomodoroClockApp;
