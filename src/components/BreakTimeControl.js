import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BreakTimeControl extends Component {
  render() {
    const { increment, decrement } = this.props.controlMethods;

    return (
      <div className='length-control-container' id='break-controls'>
        <h3 id='break-label'>Break Length</h3>
        <div
          className='control arrow-control'
          id='break-decrement'
          onClick={decrement}
        >
          <i className='fa fa-arrow-down' />
        </div>
        <div className='control' id='break-length'>
          {this.props.breakLength}
        </div>
        <div
          className='control arrow-control'
          id='break-increment'
          onClick={increment}
        >
          <i className='fa fa-arrow-up' />
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
