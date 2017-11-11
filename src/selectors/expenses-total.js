

const totalExpenses = (expenses)=>{


    const total = expenses.reduce((sum, {amount})=>{

             return sum+amount;

    }, 0);


 return total;

};


export default totalExpenses;