import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import totalExpenses from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = (props)=>{


  return (

    <div className="summary-container">

      <h2 className="summary-container__title">Viewing <span>{props.expenses.length}</span> expense(s) amounting to <span>{numeral((totalExpenses(props.expenses))/100).format('$0,0.00')}</span></h2>

       <div>

       <Link to="/create" className="btn btn-full">Add Expense</Link>

          </div>


       </div>


  	);



};



const mapStateToProps = (state)=>{


   return {

   expenses: getVisibleExpenses(state.expenses, state.filters)

   };



};









export default connect(mapStateToProps)(ExpenseSummary);