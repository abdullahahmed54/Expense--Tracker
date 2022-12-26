import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
export const IncomeExpenses = () => {
  const context = useContext(GlobalContext);
  const amounts = context.transactions.map((transaction) => transaction.amount);

  const negValues = amounts.filter((amount) => amount < 0);
  const totalNeg = negValues.reduce((acc, num) => (acc = acc + num), 0);
  const posValues = amounts.filter((amount) => amount > 0);

  const totalPos = posValues.reduce((acc, num) => (acc = acc + num), 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${totalPos}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${Math.abs(totalNeg)}</p>
      </div>
    </div>
  );
};
