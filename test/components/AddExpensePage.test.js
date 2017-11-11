import {AddExpensePage} from '../../src/components/AddExpensePage';
import {shallow} from 'enzyme';
import React from 'react';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';


test('should render AddExpensePage correctly', ()=>{


const onSubmit = jest.fn();
const history = {push:jest.fn()};

const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history = {history}/>);

expect(toJSON(wrapper)).toMatchSnapshot();


});


test('should handle onSubmit', ()=>{


const onSubmit = jest.fn();
const history = {push:jest.fn()};

const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history = {history}/>);

wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

expect(onSubmit).toHaveBeenCalledWith(expenses[0]);
expect(history.push).toHaveBeenCalledWith('/');








});