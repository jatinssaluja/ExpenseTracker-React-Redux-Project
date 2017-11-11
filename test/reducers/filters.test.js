import filtersReducer from '../../src/reducers/filters';
import moment from 'moment';

test('should set up default filter values', ()=>{

   const state = filtersReducer(undefined, {type:'@@INIT'});

   expect(state).toEqual({

     text:'',
     sortBy:'date',
     startDate:moment().startOf('month'),
     endDate:moment().endOf('month')
   });


});


test('should set up sort by to amount', ()=>{

   const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});

   expect(state).toEqual({

     text:'',
     sortBy:'amount',
     startDate:moment().startOf('month'),
     endDate:moment().endOf('month')
   });


});


test('should set up sort by to date', ()=>{

	const currentState = {
     text:'Rent',
     sortBy:'amount',
     startDate:moment().startOf('month'),
     endDate:moment().endOf('month')
 };

   const state = filtersReducer(currentState, {type:'SORT_BY_DATE'});

   expect(state).toEqual({

     text:'Rent',
     sortBy:'date',
     startDate:moment().startOf('month'),
     endDate:moment().endOf('month')
   });


});


test('should set up text filter', ()=>{

   const state = filtersReducer(undefined, {type:'TEXT_FILTER', text:'Rent'});

   expect(state).toEqual({

     text:'Rent',
     sortBy:'date',
     startDate:moment().startOf('month'),
     endDate:moment().endOf('month')
   });


});


test('should set up start date', ()=>{

   const state = filtersReducer(undefined, {type:'SET_START_DATE', startDate:moment(0)});

   expect(state).toEqual({

     text:'',
     sortBy:'date',
     startDate:moment(0),
     endDate:moment().endOf('month')
   });


});


test('should set up end date', ()=>{

   const state = filtersReducer(undefined, {type:'SET_END_DATE', endDate:moment(0)});

   expect(state).toEqual({

     text:'',
     sortBy:'date',
     startDate:moment().startOf('month'),
     endDate:moment(0)
   });


});






