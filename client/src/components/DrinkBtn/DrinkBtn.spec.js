import React from 'react';
import {shallow} from 'enzyme';
import DrinkBtn from './DrinkBtn';

describe('DrinkBtn', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<DrinkBtn />));


  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

});
