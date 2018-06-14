import React from 'react';
import { Button } from 'react-bootstrap';

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
      <Button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </Button>
    );
  }
}
