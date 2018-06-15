import React from 'react';
import { Carousel } from 'react-bootstrap';
import { forEach, set } from 'lodash';

import { Picture } from 'components';

import './style.sass';

/**
 * Needed to bind a carousel.
 * @module carousel
 * @memberof components
 * @return {Object} A React component.
 */
export default class HeadCarousel extends React.Component {
  /**
   * constructor - Get params & set this.items.
   *
   * @param  {Object} props                   description
   * @param  {Array} props.items              description
   * @param  {String} props.items.src         description
   * @param  {String} [props.items.alt]       description
   * @param  {String} [props.items.title]     description
   * @param  {String} [props.items.subTitle]  description
   * @return {Void}                           Set the store.
   */
  constructor(props) {
    super(props);
    if (!props.items) return console.error('ERROR - An array of items is required.');
    set(this, 'items', props.items);
  }

  /**
   * buildCarousel - Get this.items and build the carousel's items.
   *
   * @return {Array}  An array wich contains carousel's items.
   */
  buildCarousel() {
    const output = [];
    forEach(this.items, ({ src, alt, title, subTitle}, i) => {
      output.push(
        <Carousel.Item key ={i} >
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
    return (
      <Carousel id="head-carousel">
        { this.buildCarousel() }
      </Carousel>
    );
  }
}
