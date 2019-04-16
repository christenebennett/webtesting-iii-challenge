import React from 'react';
import renderer from 'react-test-renderer'; 
import { render } from 'react-testing-library';

import Display from './Display'

describe('<Display />', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<Display />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
  
  it('renders <Display /> without crashing', () => {
    render(<Display />);
  });

  // defaults to unlocked and open
  it('defaults to unlocked and open', () => {
    const { getByText } = render(<Display />);
    getByText(/unlocked/i)
    getByText(/open/i)
  })


  // cannot be closed or opened if it is locked
//   displays if gate is open/closed and if it is locked/unlocked

// displays 'Closed' if the closed prop is true and 'Open' if otherwise
// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
// when locked or closed use the red-led class
// when unlocked or open use the green-led class

});