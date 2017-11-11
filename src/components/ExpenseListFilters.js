import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTextFilter, setStartDate, setEndDate} from '../actions/filters';
import {sortByDate, sortByAmount} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

class ExpenseListFilters extends Component {

 
 constructor(props) {

  super(props);

  this.onDatesChange = this.onDatesChange.bind(this);
  this.onFocusChange = this.onFocusChange.bind(this);


  this.state = {

    calendarFocused:null
    


  };





 }


onDatesChange({startDate, endDate}) {


this.props.dispatch(setStartDate(startDate));
this.props.dispatch(setEndDate(endDate));

}


onFocusChange(focused) {

this.setState(()=>({calendarFocused:focused}));


}



 render() {


  return  (<div className="filters-container">


         <div className="input-group">

           <div className="input-group__item">

             <input type="text" className = "text-input" placeholder="Search Expenses" value={this.props.filters.text} onChange={(e)=>{

                this.props.dispatch(setTextFilter(e.target.value));

                }}/>

           </div>

           <div className="input-group__item">
          
              <select className="select" onChange = {(e)=>{

              if(e.target.value === 'date'){
  
                 this.props.dispatch(sortByDate());

                    }

                   else {

                  this.props.dispatch(sortByAmount());

                        }


                    }}>

                 <option value="date">Date</option>
                 <option value="amount">Amount</option>

             </select>
           </div>



           <div className="input-group__item">

              <DateRangePicker

                  startDate={this.props.filters.startDate}
                  endDate = {this.props.filters.endDate}
                  onDatesChange = {this.onDatesChange}
                  focusedInput = {this.state.calendarFocused}
                  onFocusChange = {this.onFocusChange}
                  showClearDates = {true}
                  numberOfMonths = {1}
                  isOutsideRange = {()=>false}

                 />
  
           </div>

          </div> 

      </div>);


 }

}


const mapStateToProps = (state)=>{

 return {

   filters:state.filters

 };

};

export default connect(mapStateToProps)(ExpenseListFilters);