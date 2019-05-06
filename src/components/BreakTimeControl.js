import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BreakTimeControl extends Component {
  render() {
    return (
      <div>
        <h3 id='break-label'>Break Length</h3>
        <div id='break-length'>{this.props.breakLength}</div>
        <div id='break-increment'>
          <i className='fa fa-arrow-up' />
        </div>
        <div id='break-decrement'>
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
