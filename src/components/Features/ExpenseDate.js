import Card from "../UI/Card";
import "../Features/ExpenseDate.css" ;



const ExpenseDate = (props) => {
  const month = props.new.toLocaleString("en-us", { month: "long" });
  const day = props.new.toLocaleString("en-us", { day: "2-digit" });
  const year = props.new.getFullYear();

  return (
    <Card className="expense-date">
      <div className = "expense-date__month">{month}</div>
      <div className = "expense-date__year">{year}</div>
      <div className ="expense-date__day">{day}</div>
    </Card>
  );
}

export default ExpenseDate;



