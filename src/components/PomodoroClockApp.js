import React, { Component } from 'react';

import Timer from './Timer';
import TimerControl from './TimerControl';
import SessionTimeControl from './SessionTimeControl';
import BreakTimeControl from './BreakTimeControl';

/*
 *  CONSTANTS
 */
// const DEFAULT_SESSION_LENGTH = 25;
const DEFAULT_SESSION_LENGTH = 0.1;
const DEFAULT_BREAK_LENGTH = 5;
const MIN_LENGTH = 1;
const MAX_LENGTH = 60;

export class PomodoroClockApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionLength: DEFAULT_SESSION_LENGTH,
      breakLength: DEFAULT_BREAK_LENGTH,
      timeRemaining: {
        session: DEFAULT_SESSION_LENGTH * 60,
        break: DEFAULT_BREAK_LENGTH * 60
      },
      isOnBreak: false,
      isPaused: true
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    if (this.state.isPaused) return;

    if (this.state.isOnBreak) {
      this.setState({
        timeRemaining: { break: this.state.timeRemaining.break - 1 }
      });
    } else {
      this.setState({
        timeRemaining: { session: this.state.timeRemaining.session - 1 }
      });
    }

    console.log(this.state.timeRemaining.session);
  };

  reset = () => {
    this.setState({
      sessionLength: DEFAULT_SESSION_LENGTH,
      breakLength: DEFAULT_BREAK_LENGTH,
      timeRemaining: {
        session: DEFAULT_SESSION_LENGTH * 60,
        break: DEFAULT_BREAK_LENGTH * 60
      },
      isOnBreak: false,
      isPaused: true
    });
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
    this.setState({ sessionLength });
  };

  decrementSessionLength = () => {
    const sessionLength = Math.max(this.state.sessionLength - 1, MIN_LENGTH);
    this.setState({ sessionLength });
  };

  incrementBreakLength = () => {
    const breakLength = Math.min(this.state.breakLength + 1, MAX_LENGTH);
    this.setState({ breakLength });
  };

  decrementBreakLength = () => {
    const breakLength = Math.max(this.state.breakLength - 1, MIN_LENGTH);
    this.setState({ breakLength });
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
    const timeRemaining = this.state.isOnBreak
      ? this.state.timeRemaining.break
      : this.state.timeRemaining.session;
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
        <Timer timeRemaining={timeRemaining} />
        <TimerControl
          isPaused={this.state.isPaused}
          controlMethods={this.timerControlMethods}
        />
      </div>
    );
  }
}

export default PomodoroClockApp;
