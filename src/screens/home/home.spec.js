import React from 'react';
import { Home } from 'screens';
import { shallow } from 'enzyme';

/**
 * Unit tests for screens/tic-tac-toe.
 */
describe('screens/home', () => {
  it('should render without crashing', () => {
    shallow(<Home />);
  });
});
