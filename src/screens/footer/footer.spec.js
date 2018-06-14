import React from 'react';
import { Footer } from 'screens';
import { shallow } from 'enzyme';

/**
 * Unit tests for screens/footer.
 */
describe('screens/footer', () => {
  it('should render without crashing', () => {
    shallow(<Footer />);
  });
});
