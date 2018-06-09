import React from 'react';
import { Board } from 'components';

import './style.sass';

/**
 * Screen home.
 * @module home
 * @constructs Home
 * @lends Home
 * @memberof screens
 * @return {Object} A React component.
 */
export default class Home extends React.Component {
  /**
   * Class' constructor. Contains the states of the screen.
   * @constructs
   * @param {Object} props Data binding
   *
   */
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }
  /**
   * Set the state after each right click.
   * @param {Object} i Index of the current square.
   *
   */
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }
  /**
   * Returns the winner.
   * @param {Object} squares List of current squares.
   * @return {Object|null} The winner.
   */
  calculateWinner(squares) {
    const victoryCases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; victoryCases[i]; i++) {
      const [a, b, c] = victoryCases[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  /**
   * Manage status' handling.
   * @return {Object} Returns current grid, player's status, moves' list.
   */
  handleStatus() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const output = { current };

    if (winner) output.status = `Winner: ${winner}`;
    else output.status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    output.moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    return output;
  }
  /**
   * Set the states.
   * @param {Object} step the current step.
   */
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }
  /**
   * Screen's render.
   * @return {Object} A jsx' object.
   */
  render() {
    const { current, status, moves } = this.handleStatus();
    return (
      <div className="home">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
