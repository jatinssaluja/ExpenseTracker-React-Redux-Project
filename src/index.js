import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configurestore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


    const store = configureStore();

    /*store.dispatch(addExpense({description:'Water bill', 
	note:"this was the final payment towards water bill", 
	amount:500,
	createdAt:1200}));*/

   // store.dispatch(setTextFilter('bill'));



     const state = store.getState();



//console.log(getVisibleExpenses(state.expenses,state.filters));


const jsx = (

   <Provider store = {store}>

        <AppRouter/>

      </Provider>
	);




ReactDOM.render( jsx
  , document.querySelector('.container'));
