import React from 'react';
import { Picture } from 'components';

import './style.sass';

/**
 * First component. Just say hello.
 * @module home
 * @memberof screens
 * @return {Void} a jsx object.
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
