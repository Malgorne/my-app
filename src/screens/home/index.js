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
      <div id="home" className="btn btn-warning">
        <h1>HOME WORKS</h1>
        <Link to={'/tictactoe'} className="btn btn-warning">TIC-TAC-TOE</Link>
      </div>
    );
  }
}
