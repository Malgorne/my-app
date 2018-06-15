import React from 'react';
import { HeadCarousel } from 'components';
import { shallow } from 'enzyme';

/**
 * Unit tests for components/head-carousel.
 */
describe('components/head-carousel', () => {
  it('should render without crashing', () => {
    shallow(<HeadCarousel />);
  });
});
