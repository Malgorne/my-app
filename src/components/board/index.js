import React from 'react';
import { Square } from 'components';

import './style.sass';

/**
 * The board.
 * @module board
 * @memberof components
 * @return {Object} A React component.
 */
export default class Board extends React.Component {
  /**
   * Renders squares
   * @param {Int} i Sqaure index.
   * @return {Object} A jsx' object Square.
   */
  renderSquare(i) {
    return (<Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />);
  }
  /**
   * Screen's render.
   * @return {Object} A jsx' object.
   */
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
