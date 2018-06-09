import React from 'react';

import './style.sass';

/**
 * The square.
 * @module square
 * @memberof components
 * @return {Object} A React component.
 */
export default class Square extends React.Component {
  /**
   * Screen's render.
   * @return {Object} A jsx' object.
   */
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
