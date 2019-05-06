import React, { Component } from 'react';

import SessionTimeControl from './SessionTimeControl';
import BreakTimeControl from './BreakTimeControl';

/*
 *  CONSTANTS
 */
const DEFAULT_SESSION_LENGTH = 25;
const DEFAULT_BREAK_LENGTH = 5;
const MIN_LENGTH = 0;
const MAX_LENGTH = 60;

export class PomodoroClockApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionLength: DEFAULT_SESSION_LENGTH,
      breakLength: DEFAULT_BREAK_LENGTH
    };
  }

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
      </div>
    );
  }
}

export default PomodoroClockApp;
