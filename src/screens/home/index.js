import React from 'react';
import { Link } from 'react-router-dom';

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
   * Screen's render.
   * @return {Object} A jsx' object.
   */
  render() {
    return (
      <div id="home">
        <p>HOME WORKS</p>
        <Link to={'/tictactoe'}>TIC-TAC-TOE</Link>
      </div>
    );
  }
}
