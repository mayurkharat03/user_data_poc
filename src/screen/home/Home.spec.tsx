import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';
describe('<Home />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});

it('renders correctly across screens', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
