import React from 'react';
import { HeadCarousel } from 'components';
import { shallow, mount } from 'enzyme';

/**
 * Unit tests for components/head-carousel.
 */
describe('components/head-carousel', () => {
  it('should render without crashing', () => {
    // without params
    shallow(<HeadCarousel />);
    // With right params
    const items = [{
      src: 'path/to/img1',
      alt: 'img1',
      title: 'title img1',
      subTitle: 'subTitle img1'
    }, {
      src: 'path/to/img2',
      alt: 'img2',
      title: 'title img2',
      subTitle: 'subTitle img2'
    }, {
      src: 'path/to/img3',
      alt: 'img3',
      title: 'title img3',
      subTitle: 'subTitle img3'
    }];
    shallow(<HeadCarousel items={items}/>);
  });
});
