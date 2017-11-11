import {shallow} from 'enzyme';
import React from 'react';
import Header from '../../src/components/Header';
import toJSON from 'enzyme-to-json';


test('should render Header correctly', ()=>{

const wrapper = shallow(<Header/>);
expect(toJSON(wrapper)).toMatchSnapshot();


});