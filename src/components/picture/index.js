import React from 'react';
import img from '../../assets/img/mario.jpeg';

import './style.sass';

/**
 * Needed to bind a picture.
 * @module picture
 * @memberof components
 * @return {Void} a jsx object.
 */
export default class Picture extends React.Component {
  render() {
    return (
      <div className="picture">
        <img src={img} alt="Smiley face" height="42" width="42"/>
      </div>
    );
  }
}
