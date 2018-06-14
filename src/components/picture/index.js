import React from 'react';
import defaultImg from '../../assets/img/under-construction.png';
import { set } from 'lodash';

import './style.sass';

/**
 * Needed to bind a picture.
 * @module picture
 * @memberof components
 * @return {Object} A React component.
 */
export default class Picture extends React.Component {
  /**
   * Class' constructor. Contains the states of the screen.
   * @constructs
   * @param {Object} props Data binding
   *
   */
  constructor(props) {
    super(props);
    set(this, 'img', props.img || { src: defaultImg, alt: 'En cours de construction' });
  }
  render() {
    return (
      <div className="picture text-center">
        <img src={this.img.src} alt={this.img.path}/>
      </div>
    );
  }
}
