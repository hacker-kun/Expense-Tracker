import React, { useState } from "react";
import Card from "../UI/Card";
import "../Features/Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../Charts/ExpensesChart";

const Expenses = (props) => {
  const [dropYear, setDropYear] = useState("2022");

  const addSelectedYear = (year) => {
    setDropYear(year);
    console.log(year);
  };

  const filteredData = props.shop.filter((expense) => {
    return expense.date.getFullYear().toString() === dropYear;
  });
  


  return (
    <Card className="expenses">
      <ExpenseFilter startingYear={dropYear} onSelectedYear={addSelectedYear} />
      <ExpensesChart expenses = {filteredData}/>
      <ExpensesList item = {filteredData} />
    </Card>
  );
};
export default Expenses;
