import React from 'react';
import { Picture } from 'components';
import renderer from 'react-test-renderer';

/**
 * Unit tests for screens/picture.
 */
describe('components/home', () => {
  it('should be defined', () => expect(Picture).toBeDefined());
  it('should initialize the component', () => expect(new Picture()).toBeDefined());
  it('should respect the semantic', () => {
    const picture = renderer.create(<Picture />);
    expect(picture).toMatchSnapshot();
  });
});
