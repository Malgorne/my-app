import React from 'react';
import { Home } from 'screens';
import renderer from 'react-test-renderer';

/**
 * Unit tests for component/home.
 */
describe('components/home', () => {
  it('should be defined', () => expect(Home).toBeDefined());
  it('should initialize the component', () => expect(new Home()).toBeDefined());
  it('should respect the semantic', () => {
    const home = renderer.create(<Home />);
    expect(home).toMatchSnapshot();
  });
});
