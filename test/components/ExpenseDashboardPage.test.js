import {shallow} from 'enzyme';
import React from 'react';
import ExpenseDashboardPage from '../../src/components/ExpenseDashboardPage';
import toJSON from 'enzyme-to-json';


test('should render ExpenseDashboardPage correctly', ()=>{

const wrapper = shallow(<ExpenseDashboardPage/>);
expect(toJSON(wrapper)).toMatchSnapshot();


});