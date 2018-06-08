import React from 'react';
import img from '../../assets/img/under-construction.png';

import './style.sass';

/**
 * Needed to bind a picture.
 * @module picture
 * @memberof components
 * @return {Object} A React component.
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
