import expenses from '../fixtures/expenses';
import totalExpenses from '../../src/selectors/expenses-total';

test('should return 0 when array is empty', ()=>{

   const result = totalExpenses([]);

   expect(result).toEqual(0);


});

test('should add up single expense correctly', ()=>{

   const result = totalExpenses([expenses[0]]);

   expect(result).toEqual(expenses[0].amount);


});


test('should add up multiple expenses correctly', ()=>{

   const result = totalExpenses(expenses);

   expect(result).toEqual(expenses[0].amount + expenses[1].amount + expenses[2].amount );


});