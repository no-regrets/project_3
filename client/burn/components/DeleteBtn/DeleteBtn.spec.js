import React from 'react';
import {shallow} from 'enzyme';
import DeleteBtn from './DeleteBtn';

describe('DeleteBtn', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<DeleteBtn />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <span />', () => {
    expect(wrapper.find('span').length).toEqual(1);
  });

  it('renders the value of displayValue', () => {
    wrapper.setProps({ displayValue: '✗' });
    expect(wrapper.text()).toEqual('✗');
  });

});
