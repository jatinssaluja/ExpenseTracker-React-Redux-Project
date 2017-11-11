import React, {Component} from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';


export class AddExpensePage extends Component {

constructor(props) {
super(props);


this.onSubmit = this.onSubmit.bind(this);

}


onSubmit(expense) {

       console.log(expense);
       this.props.onSubmit(expense);
       this.props.history.push('/');


}


render() {


  return (


   <div>

    <div className="addexpense-header">

	     <h2 className="summary-container__title">Add Expense </h2>

	  </div>


     <div className="filters-container">
    <ExpenseForm  onSubmit = {this.onSubmit}/>

      </div>


    </div>  

  	);

}


}




const mapDispatchToProps = (dispatch)=>({

onSubmit: (expense)=> dispatch(addExpense(expense))



});



export default connect(undefined, mapDispatchToProps)(AddExpensePage);