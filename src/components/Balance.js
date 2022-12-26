import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
export const Balance = () => {
  const context = useContext(GlobalContext);

  const amounts = context.transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, num) => (acc = acc + num), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
