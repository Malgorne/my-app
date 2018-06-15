import React from 'react';
import { Carousel } from 'react-bootstrap';
// import { forEach, set } from 'lodash';
import kirby from '../../assets/img/kirby.jpg';
import mario from '../../assets/img/mario.jpg';
import zelda from '../../assets/img/zelda.jpg';

import { Picture } from 'components';

import './style.sass';

/**
 * Needed to bind a carousel.
 * @module carousel
 * @memberof components
 * @return {Object} A React component.
 */
export default class HeadCarousel extends React.Component {
  render() {
    return (
      <Carousel id="head-carousel">
        <Carousel.Item>
          <Picture img={{src: kirby, alt: 'kirby'}} />
          <Carousel.Caption>
            <h3>Kirby déchire tout!</h3>
            <p>Et c'est qu'une ptite boule rose</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Picture img={{src: mario, alt: 'mario'}} />
          <Carousel.Caption>
            <h3>Mario ça déchire aussi!</h3>
            <p>Pour une fois qu'un plombier chope une princesse...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Picture img={{src: zelda, alt: 'zelda'}} />
          <Carousel.Caption>
            <h3>Zelda c'est génial</h3>
            <p>Mais frappez pas les poules... c'est dangeureux</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
