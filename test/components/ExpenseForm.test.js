import {shallow} from 'enzyme';
import React from 'react';
import ExpenseForm from '../../src/components/ExpenseForm';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should render ExpenseForm correctly', ()=>{

const wrapper = shallow(<ExpenseForm/>);
expect(toJSON(wrapper)).toMatchSnapshot();


});


test('should render ExpenseForm with props correctly', ()=>{

const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
expect(toJSON(wrapper)).toMatchSnapshot();


});

test('should render error for invalid from submission', ()=>{

const wrapper = shallow(<ExpenseForm/>);
expect(toJSON(wrapper)).toMatchSnapshot();

wrapper.find('form').simulate('submit', {

   preventDefault: ()=>{}

});
expect(wrapper.state('error').length).toBeGreaterThan(0);
expect(toJSON(wrapper)).toMatchSnapshot();



});



test('should set description on input change', ()=>{

const wrapper = shallow(<ExpenseForm/>);

wrapper.find('input').at(0).simulate('change', {

  target: {value: 'New Description'}

});



expect(wrapper.state('description')).toBe('New Description');




});

test('should set note on textarea change', ()=>{

const wrapper = shallow(<ExpenseForm/>);


wrapper.find('textarea').simulate('change', {

  target: {value: 'New Note'}

});



expect(wrapper.state('note')).toBe('New Note');




});


test('should set amount if valid input', ()=>{

const wrapper = shallow(<ExpenseForm/>);


wrapper.find('input').at(1).simulate('change', {

  target: {value: '23.50'}

});



expect(wrapper.state('amount')).toBe('23.50');




});


test('should not set amount if invalid input', ()=>{

const wrapper = shallow(<ExpenseForm/>);


wrapper.find('input').at(1).simulate('change', {

  target: {value: '23.5045'}

});



expect(wrapper.state('amount')).toBe('');




});

test('should call onSubmit prop for valid form submission', ()=>{

const onSubmitSpy = jest.fn();
const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit = {onSubmitSpy}/>);


wrapper.find('form').simulate('submit', {

   preventDefault: ()=>{}

});



expect(onSubmitSpy).toHaveBeenCalledWith({

  description:'Gum',
  note:'',
  amount:195,
  createdAt:0
});




});


test('should set new date on date change', ()=>{

const wrapper = shallow(<ExpenseForm/>);


wrapper.find('SingleDatePicker').prop('onDateChange')(moment());



expect(wrapper.state('createdAt')).toEqual(moment());

});


test('should set calendar focus on change', ()=>{

const wrapper = shallow(<ExpenseForm/>);


wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true});



expect(wrapper.state('calendarFocused')).toEqual(true);

});









