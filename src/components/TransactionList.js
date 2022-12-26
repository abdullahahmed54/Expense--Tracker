import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transactions from "./Transactions";

export const TransactionList = () => {
  const context = useContext(GlobalContext);
  

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {context.transactions.map((transaction) => (
          <Transactions key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
