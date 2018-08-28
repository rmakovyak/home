import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegistrationForm from './RegistrationForm';

configure({ adapter: new Adapter() });

test('render a RegistrationForm', () => {
  const wrapper = shallow(<RegistrationForm />);
  expect(wrapper).toMatchSnapshot();
});
