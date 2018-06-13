import React from 'react';
import { Header } from 'screens';
import { shallow } from 'enzyme';

/**
 * Unit tests for screens/tic-tac-toe.
 */
describe('screens/home', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });
});
