import React from 'react';

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
        <h1>HOME WORKS</h1>
      </div>
    );
  }
}
