import React from 'react';
import { Board } from 'components';

import './style.sass';

/**
 * Screen home.
 * @module home
 * @memberof screens
 * @return {Object} A React component.
 */
export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
