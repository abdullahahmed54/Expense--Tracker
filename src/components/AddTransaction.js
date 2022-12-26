import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onsubmitHandler = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onsubmitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={textChangeHandler}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={amountChangeHandler}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
