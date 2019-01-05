import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Nav />));

//   it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render 3 <li />s', () => {
    expect(wrapper.find('li').length).toEqual(3);
  });

});