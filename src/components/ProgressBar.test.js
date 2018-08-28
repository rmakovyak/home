import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProgressBar from './ProgressBar';

configure({ adapter: new Adapter() });

test('render a ProgressBar', () => {
  const wrapper = shallow(<ProgressBar />);
  expect(wrapper).toMatchSnapshot();
});

test('render a ProgressBar with a level prop', () => {
  const wrapper = shallow(<ProgressBar level={2} />);
  expect(wrapper).toMatchSnapshot();
});
