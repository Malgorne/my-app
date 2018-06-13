import React from 'react';
import { Footer } from 'screens';
import { shallow } from 'enzyme';

/**
 * Unit tests for screens/tic-tac-toe.
 */
describe('screens/footer', () => {
  it('should render without crashing', () => {
    shallow(<Footer />);
  });
});
