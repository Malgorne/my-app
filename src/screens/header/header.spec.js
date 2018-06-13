import React from 'react';
import { Header } from 'screens';
import { shallow } from 'enzyme';

/**
 * Unit tests for screens/header.
 */
describe('screens/header', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });
});
