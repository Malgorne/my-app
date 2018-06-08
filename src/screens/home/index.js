import React from 'react';
import { Picture } from 'components';

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
        <h1>Welcome home</h1>
        <Picture />
      </div>
    );
  }
}
