import {shallow} from 'enzyme';
import React from 'react';
import NotFoundPage from '../../src/components/NotFoundPage';
import toJSON from 'enzyme-to-json';


test('should render NotFoundPage correctly', ()=>{

const wrapper = shallow(<NotFoundPage/>);
expect(toJSON(wrapper)).toMatchSnapshot();


});