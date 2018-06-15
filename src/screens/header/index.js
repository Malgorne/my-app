import React from 'react';
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
    return (
      <HeadCarousel />
    );
  }
}
