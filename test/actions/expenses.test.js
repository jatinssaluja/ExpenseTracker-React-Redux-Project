import {addExpense, editExpense, removeExpense} from '../../src/actions/expenses';

test('should set up remove expense object', ()=>{

   const action = removeExpense(10);

   expect(action).toEqual({

   type:'REMOVE_EXPENSE',
   id:10

   });


});


test('should set up edit expense object', ()=>{

   const action = editExpense(10, {description:"hello", amount:200});

   expect(action).toEqual({

   type:'EDIT_EXPENSE',
   id:10,
   updates:{description:"hello", amount:200}

   });


});


test('should set up add expense object with provided values', ()=>{

   const action = addExpense({description:"hello", note:'note', amount:200, createdAt:1200});

   expect(action).toEqual({

   type:'ADD_EXPENSE',
   expense:{description:'hello',
             note:'note',
             amount:200,
            createdAt:1200,
            id:expect.any(String)}

   });


});




test('should set up add expense object with default values', ()=>{

   const action = addExpense();

   expect(action).toEqual({

   type:'ADD_EXPENSE',
   expense: {description:'',
              note:'',
              amount:0,
              createdAt:0,
             id:expect.any(String)}

   });


});












