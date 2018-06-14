import React from 'react';
import { AppNavbar } from 'components';
import { shallow } from 'enzyme';

/**
 * Unit tests for components/appNavbar.
 */
describe('components/appNavbar', () => {
  it('should render without crashing', () => {
    shallow(<AppNavbar />);
  });
  it('should build nav links', () => {

  });
});
