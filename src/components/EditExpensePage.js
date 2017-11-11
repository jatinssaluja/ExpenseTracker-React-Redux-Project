import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpensePage = (props)=> {


   console.log(props.expense);

   return (<div>

        <div className="addexpense-header">

       <h2 className="summary-container__title">Edit Expense </h2>

          </div>

     <div className="filters-container">
        <ExpenseForm expense={props.expense}
                 onSubmit = {(updates)=>{

                 props.dispatch(editExpense(props.expense.id, updates));
                 props.history.push('/');

                 }}  />

      <button className="rmbtn" onClick={()=>{

          props.dispatch(removeExpense(props.expense.id));
          props.history.push('/');

      }}>Remove Expense</button>

       </div>

     </div>);


	};












const mapStateToProps = (state, props)=>{

  const expense = state.expenses.find((expense)=>{

          return expense.id === props.match.params.id;

  });

  return {

   expense

  };


};


export default connect(mapStateToProps)(EditExpensePage);