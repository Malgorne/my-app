import React from 'react';
import { TicTacToe } from 'screens';
import { shallow, mount } from 'enzyme';

/**
 * Unit tests for screens/tic-tac-toe.
 */
describe('screens/tic-tac-toe', () => {
  it('should render without crashing', () => {
    shallow(<TicTacToe />);
  });

  const simulateParty = wrapper => {
    // player 2
    const turn2 = wrapper.find('button.square').at(1);
    turn2.simulate('click');
    // player 1
    const turn3 = wrapper.find('button.square').at(4);
    turn3.simulate('click');
    expect(wrapper.find('.game-info ol').length).toBe(1);
    // player 2
    const turn4 = wrapper.find('button.square').at(5);
    turn4.simulate('click');
    // player 1
    const turn5 = wrapper.find('button.square').at(8);
    turn5.simulate('click');
  };

  it('should render game status correctly', () => {
    const wrapper = mount(<TicTacToe/>);
    const firstPlayer = wrapper.find('div.game-info').children().first().text();
    expect(firstPlayer).toEqual('Next player: X');

    const button = wrapper.find('button.square').first();
    button.simulate('click');
    expect(wrapper.find('.game-info ol li').length).toEqual(2);

    const secondPlayer = wrapper.find('div.game-info').children().first().text();
    expect(secondPlayer).toEqual('Next player: O');

    simulateParty(wrapper);
    expect(wrapper.find('.game-info ol li').length).toEqual(6);

    // button already clicked, no change
    const turn6 = wrapper.find('button.square').at(8);
    turn6.simulate('click');
    expect(wrapper.find('.game-info ol li').length).toEqual(6);

    const winner = wrapper.find('div.game-info').children().first().text();
    expect(winner).toEqual('Winner: X');
  });

  it('should render the right turns', () => {
    const wrapper = mount(<TicTacToe/>);
    simulateParty(wrapper);
    const button1 = wrapper.find('.game-info ol li button').at(2);
    button1.simulate('click');
    const firstPlayer = wrapper.find('div.game-info').children().first().text();
    expect(firstPlayer).toEqual('Next player: X');
  });
});
