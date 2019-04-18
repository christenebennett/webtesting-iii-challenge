import React from 'react';
import renderer from 'react-test-renderer'; 
import { render, cleanup } from 'react-testing-library';

import Display from './Display'

describe('<Display />', () => {
  
  // when unlocked or open use the green-led class
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
    cleanup();
  })

  // displays 'Closed' if the closed prop is true
  it('displays as closed if the closed prop is true', () => {
    const { getByText } = render(<Display closed={true} />)
    getByText(/closed/i);
    cleanup();
  })

  // displays 'Open' if the closed prop is false
  it('displays as open if closed prop is false', () => {
    const { getByText } = render(<Display closed={false} />)
    getByText(/open/i);
    cleanup();
  })

  // when locked or closed use the red-led class
  it('displays red leds when closed and locked snapshot', () => {
    const tree = renderer.create(<Display closed={true} locked={true}/>)
    expect(tree.toJSON()).toMatchSnapshot();
  })

  // displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
  it('displays as locked if the locked prop is true', () => {
    const { getByText } = render(<Display closed={true} locked={true} />)
    getByText(/locked/i)
    cleanup();
  })

});