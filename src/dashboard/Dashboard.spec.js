import React from 'react';
import renderer from 'react-test-renderer'; 
import { render, cleanup, fireEvent } from 'react-testing-library';

import Dashboard from './Dashboard'

describe('<Dashboard />', () => {

  // renders without crashing
  it('renders without crashing', () => {
    render(<Dashboard />)
  })

  //create snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />)
    expect(tree.toJSON()).toMatchSnapshot();
  })

  // when open, clicking on close gate will display closed
  it('should display as closed when close button is clicked', () => {
    const { getByText } = render(<Dashboard closed={false}/>);
    const closeButton = getByText(/close gate/i);
    fireEvent.click(closeButton);
    getByText(/closed/i)
  })

})
