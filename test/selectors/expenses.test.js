import getVisibleExpenses from '../../src/selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';


test('should filter by text value', ()=>{

   const result = getVisibleExpenses(expenses, {text:'e', sortBy:'date'});

   expect(result).toEqual([

   expenses[2],
   expenses[1]
   ]);


});


test('should filter by start date', ()=>{

   const result = getVisibleExpenses(expenses, {text:'', sortBy:'date', startDate:moment(0)});

   expect(result).toEqual([

   expenses[2],
   expenses[0]
   ]);


});


test('should filter by end date', ()=>{

   const result = getVisibleExpenses(expenses, {text:'', sortBy:'date', endDate:moment(0).add(4,'days')});

   expect(result).toEqual([

   expenses[2],
   expenses[0],
   expenses[1]
   ]);


});


test('should sort by date', ()=>{

   const result = getVisibleExpenses(expenses, {sortBy:'date'});

   expect(result).toEqual([

   expenses[2],
   expenses[0],
   expenses[1]
   ]);


});


test('should sort by amount', ()=>{

   const result = getVisibleExpenses(expenses, {sortBy:'amount'});

   expect(result).toEqual([

   expenses[1],
   expenses[2],
   expenses[0]
   ]);


});










