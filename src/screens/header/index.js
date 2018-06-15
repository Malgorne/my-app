import React from 'react';

import kirby from '../../assets/img/kirby.jpg';
import mario from '../../assets/img/mario.jpg';
import zelda from '../../assets/img/zelda.jpg';

import { HeadCarousel } from 'components';

import './style.sass';

/**
 * Screen header.
 * @module header
 * @constructs header
 * @lends Header
 * @memberof screens
 * @return {Object} A React component.
 */
export default class Header extends React.Component {
  /**
   * Screen's render.
   * @return {Object} A jsx' object.
   */
  render() {
    const items = [{
      src: kirby,
      alt: 'kirby',
      title: 'Kirby déchire tout!',
      subTitle: "Et c'est qu'une ptite boule rose"
    }, {
      src: mario,
      alt: 'mario',
      title: 'Mario ça déchire aussi!',
      subTitle: "Pour une fois qu'un plombier chope une princesse..."
    }, {
      src: zelda,
      alt: 'zelda',
      title: "Zelda c'est génial",
      subTitle: "Mais frappez pas les poules... c'est dangeureux"
    }];
    return (
      <HeadCarousel items={items}/>
    );
  }
}
