import React from 'react';
import { Board } from 'components';
import { Row, Col, Button, ButtonToolbar } from 'react-bootstrap';

import './style.sass';

/**
 * Screen tic-tac-toe.
 * @module tic-tac-toe
 * @constructs TicTacToe
 * @lends TicTacToe
 * @memberof screens
 * @return {Object} A React component.
 */
export default class TicTacToe extends React.Component {
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
        <Button key={move} bsStyle="info" bsSize="xsmall" onClick={() => this.jumpTo(move)}>{desc}</Button>
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
      <Row>
        <Col xsOffset={1} xs={10} smOffset={3} sm={6}>
          <Row>
            <h1>tic tac toe</h1>
          </Row>
          <Row className="tic-tac-toe">
            <Col className="game-board" xs={12} sm={6}>
              <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
              />
            </Col>
            <Col className="game-info" xs={12} sm={6}>
              <div>{status}</div>
              <ButtonToolbar>{moves}</ButtonToolbar>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
