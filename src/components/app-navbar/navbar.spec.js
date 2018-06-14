import React from 'react';
import { Navbar } from 'components';
import { shallow } from 'enzyme';

/**
 * Unit tests for components/navbar.
 */
describe('components/navbar', () => {
  it('should render without crashing', () => {
    shallow(<Navbar />);
  });
});
