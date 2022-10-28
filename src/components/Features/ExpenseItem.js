import React from "react";

import Card from "../UI/Card";
import ExpenseDate from "../Features/ExpenseDate";
import "../Features/ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickhandler !
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("edit");
  //   console.log(title);
  // };
  const rs = 'Rs. '
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate new={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price"><div className="rs">{rs}</div>{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title </button> */}
      </Card>
    </li>
  );
};
export default ExpenseItem;
