import React from 'react';

import './style.sass';

/**
 * First component. Just say hello.
 * @module home
 * @memberof components
 * @return {Void} a jsx object.
 */
export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome home</h1>
        <p>wouhou! Home works!!!</p>
      </div>
    );
  }
}
