import React from 'react';
import { Square } from 'components';
import { shallow } from 'enzyme';

/**
 * Unit tests for components/picture.
 */
describe('components/picture', () => {
  it('should render without crashing', () => {
    shallow(<Square />);
  });
});
