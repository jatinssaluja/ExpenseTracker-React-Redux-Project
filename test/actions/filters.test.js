import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../src/actions/filters';
import moment from 'moment';


test('should set up set text filter object', ()=>{

   const action = setTextFilter("text");

   expect(action).toEqual({

   type:'TEXT_FILTER',
   text:"text"

   });


});


test('should set up sort by date object', ()=>{

   const action = sortByDate();

   expect(action).toEqual({

   type:'SORT_BY_DATE'

   });


});


test('should set up sort by amount object', ()=>{

   const action = sortByAmount();

   expect(action).toEqual({

   type:'SORT_BY_AMOUNT'

   });


});


test('should set up set start date object', ()=>{

   const action = setStartDate(moment(0));

   expect(action).toEqual({

   type:'SET_START_DATE',
   startDate:moment(0)

   });


});


test('should set up set end date object', ()=>{

   const action = setEndDate(moment(0));

   expect(action).toEqual({

   type:'SET_END_DATE',
   endDate:moment(0)

   });


});




















