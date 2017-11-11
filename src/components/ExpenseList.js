import React from 'react';
import {connect} from 'react-redux';
import Expense from './Expense';
import getVisibleExpenses from '../selectors/expenses';

export const ExpenseList = (props)=>{

if(props.expenses.length === 0) {

    return (

  <div className="filters-container">

    <div className="list-header">
       <div className="show-for-mobile">Expenses</div>
       <div className="show-for-desktop">Expense</div>
       <div className="show-for-desktop">Amount</div>
       </div>

      
      
 
             <p className="list-item">No Expenses</p>
          
      </div>

    );

   }
   	
 else {   

  return (<div className="filters-container">

     <div className="list-header">
       <div className="show-for-mobile">Expenses</div>
       <div className="show-for-desktop">Expense</div>
       <div className="show-for-desktop">Amount</div>
       </div>


    {props.expenses.map((expense)=>{

     
       return <Expense key = {expense.id} expense = {expense}/>;



    })}

   
    </div>



);

 }

};


const mapStateToProps = (state)=>{

 return {
 
  expenses: getVisibleExpenses(state.expenses, state.filters)

 };


};


export default connect(mapStateToProps)(ExpenseList);


