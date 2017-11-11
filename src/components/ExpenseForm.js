import React, {Component} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends Component {

	constructor(props) {

      super(props);

      this.onDescriptionChange = this.onDescriptionChange.bind(this);
      this.onNoteChange = this.onNoteChange.bind(this);
      this.onAmountChange = this.onAmountChange.bind(this);
      this.onDateChange = this.onDateChange.bind(this);
      this.onFocusChange = this.onFocusChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {

       description: props.expense ? props.expense.description : '',
       note:props.expense ? props.expense.note : '',
       amount:props.expense ? (props.expense.amount/100).toString() : '',
       createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
       calendarFocused:false,
       error:''

      };



	}


   onDescriptionChange(e) {
 
   const description = e.target.value;

    this.setState(()=>{

     return {
  
     description:description

     };


    });


   }


  onNoteChange(e) {

    const note = e.target.value;

    this.setState(()=>{

     return {note};


    });


   }

 onAmountChange(e) {

    const amount = e.target.value;
   
    if(!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {

    this.setState(()=>({amount}));

      }
   }


   onDateChange(createdAt) {

    if(createdAt){

    this.setState(()=>({createdAt}));
     }
      
   }


  onFocusChange({ focused }) {

    this.setState(()=>({calendarFocused:focused}));

      
   }


  onSubmit(e){

   e.preventDefault();

   if(!this.state.description || !this.state.amount){

       this.setState(()=>{

        return {
        
        error:'Please provide description and amount fields'

        };

       });

   }

   else {



      this.props.onSubmit({description:this.state.description, 
        amount:parseFloat(this.state.amount,10)*100, 
        note:this.state.note, createdAt: this.state.createdAt.valueOf() });

      this.setState(()=>{

        return {
        
        error:''

        };

       });

   }


  }





 render() {


 return (

     
      <form className="form" onSubmit = {this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}

        <input type="text" className = "text-input" placeholder="Description" 
  
         value = {this.state.description}
         onChange = {this.onDescriptionChange}
        autoFocus />
        <input type="text" className = "text-input"

        value = {this.state.amount}
        onChange = {this.onAmountChange}

        placeholder="Amount" />

        <SingleDatePicker

         date = {this.state.createdAt}
         onDateChange = {this.onDateChange}
         focused = {this.state.calendarFocused}
         onFocusChange = {this.onFocusChange}
         numberOfMonths = {1}
         isOutsideRange = {()=>false}

          />



        <textarea className="textarea textarea-mod" placeholder="Add a note for your expense (optional)"

        value = {this.state.note}
        onChange = {this.onNoteChange}
        ></textarea>

        <div>
          <button className="addbtn">Save Expense</button>
          </div>

         </form>

      


 	);


 }



}

export default ExpenseForm;