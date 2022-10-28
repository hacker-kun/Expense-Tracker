import React , {useState} from 'react'
import Expenses from "./components/Features/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";


const dummy_Expenses = [
  {
    id: "e1",
    title: "New phone",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [addedExpense,setAddedExpense]= useState(dummy_Expenses);
  const addDataHandler = (addedData) => {
    console.log("IN APP JS");
    console.log(addedData);

    setAddedExpense((prevExpense) => {
      return [addedData, ...prevExpense];
    });
    

  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onAddData={addDataHandler} />
      <Expenses shop={addedExpense} /> 
      
    </div>
  );
};

export default App;
