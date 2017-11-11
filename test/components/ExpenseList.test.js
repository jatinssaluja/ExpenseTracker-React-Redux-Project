import {shallow} from 'enzyme';
import React from 'react';
import {ExpenseList} from '../../src/components/ExpenseList';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';


test('should render ExpenseList with Expenses', ()=>{

const wrapper = shallow(<ExpenseList expenses={expenses}/>);
expect(toJSON(wrapper)).toMatchSnapshot();


});


test('should render ExpenseList with No Expenses message', ()=>{

const wrapper = shallow(<ExpenseList expenses={[]}/>);
expect(toJSON(wrapper)).toMatchSnapshot();


});