import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Transactions = (props) => {
  const context = useContext(GlobalContext);

  const deleteTransactionHandler = () => {
    context.deleteTransaction(props.transaction.id);
  };

  const sign = props.transaction.amount < 0 ? "-" : "+";
  const classA = props.transaction.amount < 0 ? "minus" : "plus";
  return (
    <div>
      <li className={classA}>
        {props.transaction.text}{" "}
        <span>
          {sign}${Math.abs(props.transaction.amount)}
        </span>
        <button onClick={deleteTransactionHandler} className="delete-btn">
          x
        </button>
      </li>
    </div>
  );
};

export default Transactions;
