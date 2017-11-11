import expensesReducer from '../../src/reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set up default expenses value', ()=>{

   const state = expensesReducer(undefined, {type:'@@INIT'});

   expect(state).toEqual([]);


});


test('should remove expense value', ()=>{

   const state = expensesReducer(expenses, {type:'REMOVE_EXPENSE', id:'1'});

   expect(state).toEqual([expenses[1], expenses[2]]);


});

test('should not remove expense value if id does not exist', ()=>{

   const state = expensesReducer(expenses, {type:'REMOVE_EXPENSE', id:'4'});

   expect(state).toEqual(expenses);


});

test('should add an expense', ()=>{

	const expense = {

  id:'4',
  description:'Water',
  note:'',
  amount:175,
  createdAt:0

	};

   const state = expensesReducer(expenses, {type:'ADD_EXPENSE', expense});

   expect(state).toEqual([...expenses, expense]);


});


test('should edit an expense', ()=>{

	const updates = {
  
  description:'Water',
  amount:175
	};

   const state = expensesReducer(expenses, {type:'EDIT_EXPENSE', id:'1', updates});

   expect(state).toEqual([

  { id:'1',
    description:'Water',
    note:'',
    amount:175,
    createdAt:0 },expenses[1], expenses[2]]);


});


test('should not edit an expense if expense not found', ()=>{

	const updates = {
  
  description:'Water',
  amount:175
	};

   const state = expensesReducer(expenses, {type:'EDIT_EXPENSE', id:'4', updates});

   expect(state).toEqual(expenses);


});







