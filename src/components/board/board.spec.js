import React from 'react';
import { Board } from 'components';
import { shallow, mount } from 'enzyme';

/**
 * Unit tests for components/board.
 */
describe('components/board', () => {
  it('should render without crashing', () => {
    let squares = Array(9).fill(null);
    shallow(<Board squares={squares}/>);
  });
  it('calls onClick event on click of a board square', () =>{
    let squares = Array(9).fill(null);
    const onClick = jest.fn();
    let wrapper = mount(<Board squares={squares} onClick={onClick}/>);
    wrapper.find('button.square').first().simulate('click');
    expect(onClick).toBeCalledWith(0);
  });
});
