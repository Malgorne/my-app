import React from 'react';
import { Picture } from 'components';
import { shallow } from 'enzyme';

/**
 * Unit tests for components/picture.
 */
describe('components/picture', () => {
  it('should render without crashing', () => {
    shallow(<Picture />);
  });
});
