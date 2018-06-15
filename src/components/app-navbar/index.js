import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { forEach, set } from 'lodash';

import './style.sass';

/**
 * Build the main navbar.
 * @module appNavbar
 * @memberof components
 * @return {Object} A React component.
 */
export default class AppNavbar extends React.Component {
  constructor(props) {
    super(props);
    if (!props.links) return console.error("ERROR - This component needs a link's Array");
    set(this, 'links', props.links);
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
      <Navbar inverse collapseOnSelect fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">my-app incredible</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            { this.buildLi() }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
