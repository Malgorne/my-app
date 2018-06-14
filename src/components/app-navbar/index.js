import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { forEach } from 'lodash';

import './style.sass';

/**
 * Build a navbar.
 * @module navbar
 * @memberof components
 * @return {Object} A React component.
 */
export default class AppNavbar extends React.Component {
  constructor(props) {
    super(props);
    if (!props.links) return console.log("ERROR - This component needs a link's Array");
    this.links = props.links;
  }

  buildLi() {
    const output = [];
    forEach(this.links, (item, i) => {
      output.push(
        <NavItem eventKey={i} key ={i} href={ item.src }>
          { item.content.toUpperCase() }
        </NavItem>
      );
    });
    return output;
  }

  render() {
    return (
      <Navbar>
        <Nav>
          { this.buildLi() }
        </Nav>
      </Navbar>
    );
  }
}
