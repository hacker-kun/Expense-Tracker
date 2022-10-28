import React , {useState} from 'react'
import Expenses from "./components/Features/Expenses";
import logo from "./components/Asset/logo.png"

import NewExpense from "./components/NewExpense/NewExpense";


const dummy_Expenses = [
  {
    id: "e1",
    title: "Books",
    amount: 10000,
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
  {
    id: "e5",
    title: "Smart phone",
    amount: 16000,
    date: new Date(2022, 6, 5)
  },
  {
    id: "e6",
    title: "Tickets",
    amount: 700,
    date: new Date(2022, 9, 10)
  },
  {
    id: "e7",
    title: "Speaker",
    amount: 9000,
    date: new Date(2022, 9, 2)
  },
  {
    id: "e8",
    title: "College Fees",
    amount: 12000,
    date: new Date(2022, 3, 2)
  },
  {
    id: "e9",
    title: "Property",
    amount: 23000,
    date: new Date(2020, 5, 30)
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
      <img src={logo} alt="logo"/>
      <NewExpense onAddData={addDataHandler} />
      <Expenses shop={addedExpense} /> 
      
    </div>
  );
};

export default App;
