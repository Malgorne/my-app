import React from 'react';

import './style.sass';

/**
 * Screen footer.
 * @module footer
 * @constructs footer
 * @lends Footer
 * @memberof screens
 * @return {Object} A React component.
 */
export default class Footer extends React.Component {
  /**
   * Screen's render.
   * @return {Object} A jsx' object.
   */
  render() {
    return (
      <div id="footer">
        <p>FOOTER WORKS</p>
      </div>
    );
  }
}
