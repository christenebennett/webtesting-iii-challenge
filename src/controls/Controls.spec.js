import React from 'react';
import renderer from 'react-test-renderer'; 
import { render, cleanup, fireEvent } from 'react-testing-library';

import Controls from './Controls'

describe('<Controls />', () => {

  // renders without crashing
  it('renders without crashing', () => {
    render(<Controls />);
    cleanup();
  })

  //snapshot when gate is closed 
  it('matches closed gate snapshot ', () => {
    const tree = renderer.create(<Controls closed={true}/>)
    expect(tree.toJSON()).toMatchSnapshot();
    cleanup();
  })

  // snapshot when gate is closed and locked
  it('matches closed and locked gate snapshot ', () => {
    const tree = renderer.create(<Controls closed={true} locked={true}/>)
    expect(tree.toJSON()).toMatchSnapshot();
    cleanup();
  })

  // clicking on lock gate will call lock function
  it('should lock gate when lock is clicked', () => {
    const mockLock = jest.fn();
    const { getByText } = render(<Controls closed={true} toggleLocked={mockLock}/>)
    const lockButton = getByText(/lock gate/i)
    fireEvent.click(lockButton);
    expect(mockLock).toHaveBeenCalled();
    cleanup();
  })

  // cannot be closed if it is locked
  it('cannot be opened if locked', () => {
    const mockOpen = jest.fn();
    const { getByText } = render(<Controls closed={true} toggleClosed={mockOpen} locked={true}/>)
    const openButton = getByText(/open gate/i)
    fireEvent.click(openButton);
    expect(mockOpen).not.toHaveBeenCalled();
    cleanup();
  })

  // cannot be opened if it is locked
  it('cannot be opened if locked', () => {
    const mockOpen = jest.fn();
    const { getByText } = render(<Controls toggleClosed={mockOpen} locked={true}/>)
    const openButton = getByText(/close gate/i)
    fireEvent.click(openButton);
    expect(mockOpen).not.toHaveBeenCalled();
    cleanup();
  })

})

