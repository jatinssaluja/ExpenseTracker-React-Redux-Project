import {shallow} from 'enzyme';
import React from 'react';
import Expense from '../../src/components/Expense';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';


test('should render Expense Component with fixture data', ()=>{

const wrapper = shallow(<Expense expense={expenses[0]}/>);
expect(toJSON(wrapper)).toMatchSnapshot();


});