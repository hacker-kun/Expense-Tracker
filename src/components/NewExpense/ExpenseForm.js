import React ,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const[enterTitle,setEnterTitle] = useState("");
    const[enterAmount,setEnterAmount] = useState("");
    const[enterDate,setEnterDate] = useState("");
    const titleChangeHandler = (event) =>{
        setEnterTitle(event.target.value)

    }

    
    const amountChangeHandler = (event) =>{
        setEnterAmount(event.target.value)
    }

    
    const dateChangeHandler = (event) =>{
        setEnterDate(event.target.value)
     }

    const submitHandler = (event) => {
       event.preventDefault();
    

    const expenseData = {
        title : enterTitle,
        amount :+enterAmount,
        date : new Date(enterDate)

    };
    
    props.onSaveData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");

    };

    

   
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
         {/* title */}
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value = {enterTitle} />
        </div>

        {/* Amount */}

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min ="0.01" step = "0.01" 
          onChange={amountChangeHandler} 
          value={enterAmount}
          />
        </div>

        {/* Date */}
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-01-01" 
          onChange={dateChangeHandler} 
          value = {enterDate}
          />
        </div>

      </div>
      <div className="new-expense__actions" >
      <button type="submit">Add Expense</button>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>  
    </form>
  );
};

export default ExpenseForm;