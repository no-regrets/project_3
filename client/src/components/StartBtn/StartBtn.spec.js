import React from 'react';
import {shallow} from 'enzyme';
import StartBtn from './StartBtn';

describe ('StartBtn', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<StartBtn />));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it()

})