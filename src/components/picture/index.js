import React from 'react';
import img from '../../assets/img/under-construction.png';

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
        <img src={img} alt="under construction" />
      </div>
    );
  }
}
