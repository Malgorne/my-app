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
  renderSquare(i) {
    return (<Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />);
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext
    });
  }
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
