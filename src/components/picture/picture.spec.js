import React from 'react';
import { Picture } from 'components';
import { shallow } from 'enzyme';

/**
 * Unit tests for components/picture.
 */
describe('components/picture', () => {
  it('should render without crashing', () => {
    // With default img
    shallow(<Picture />);
    // With a given img
    const img = {
      src: '../../assets/img/under-construction.png',
      alt: 'test'
    };
    shallow(<Picture img={ img }/>);
  });
});
