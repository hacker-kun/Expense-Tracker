import React , {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css' ;

const NewExpense = (props) => {

    const [click, setClick] = useState(false);

    const expenseDataHandler = (enteredData) =>{
        const expenseData = {   // doesn't need to be of same name 
            ...enteredData,
            id : Math.random().toString()
        }
        props.onAddData(expenseData);
        
        setClick(false);
    }
    

    const clickHandler = () => {
        setClick(true)
    }

    const cancelHandler = () => {
        setClick(false)
    }

    return(
        <div className="new-expense">
            {!click && <button onClick={clickHandler}>Add New Expense</button>}
            {click && <ExpenseForm onSaveData={expenseDataHandler} onCancel={cancelHandler}/>} 
             
            {/* random normal prop child to parent communication */}

        </div>
    )
}
export default NewExpense ;