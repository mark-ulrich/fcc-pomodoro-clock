import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BreakTimeControl extends Component {
  render() {
    const { increment, decrement } = this.props.controlMethods;

    return (
      <div>
        <h3 id='break-label'>Break Length</h3>
        <div id='break-length'>{this.props.breakLength}</div>
        <div id='break-increment' onClick={increment}>
          <i className='fa fa-arrow-up' />
        </div>
        <div id='break-decrement' onClick={decrement}>
          <i className='fa fa-arrow-down' />
        </div>
      </div>
    );
  }
}

BreakTimeControl.propTypes = {
  breakLength: PropTypes.number.isRequired,
  controlMethods: PropTypes.object.isRequired
};

export default BreakTimeControl;
