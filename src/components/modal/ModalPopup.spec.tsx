import React from 'react';
import renderer from 'react-test-renderer';
import ModalPopup from './ModalPopup';
test('renders correctly', () => {
  const tree = renderer.create(<ModalPopup />).toJSON();
  expect(tree).toMatchSnapshot();
});
