import React from 'react';
import { Carousel } from 'react-bootstrap';
import { forEach, set } from 'lodash';
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
  constructor(props) {
    super(props);
    if (!props.items) return console.error('ERROR - An array of items is required.');
    this.items = props.items;
  }

  buildCarousel() {
    const output = [];
    forEach(this.items, ({ src, alt, title, subTitle}) => {
      output.push(
        <Carousel.Item>
          <Picture img={{ src, alt }} />
          <Carousel.Caption>
            <h3>{ title }</h3>
            <p>{ subTitle }</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return output;
  }
  render() {
    console.log(this.buildCarousel());
    return (
      <Carousel id="head-carousel">
        { this.buildCarousel() }
      </Carousel>
    );
  }
}
