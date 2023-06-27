import React, { useContext, useReducer, useState } from "react";
import TransactionsContext from "./TransactionsContext";

function Main() {
  let { transactionsArray, addTransaction } = useContext(TransactionsContext);
  let [desc, setDesc] = useState("");
  let [amount, setAmount] = useState(0);

  const handleAddition = (event) => {
    event.preventDefault();
    addTransaction({
      desc: desc,
      amount: Number(amount),
    });
  };
  return (
    <div className="page-width">
      <div className="Header">
        <h1>Current Balance</h1>

        <h3>$500</h3>
      </div>
      <div className="income-expense">
        <div className="income-box">
          <h3>Income</h3>
          <span>$500</span>
        </div>
        <div className="expense-box">
          <h3>Expense</h3>
          <span>$300</span>
        </div>
      </div>
      <br />
      <br />
      <div className="transactions-list">
        <h3>Transactions History</h3>
        <ul className="trans-list">
          {transactionsArray.map((transObj) => (
            <li>
              <span>{transObj.desc}</span>
              <span>{transObj.amount}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="transactions-form">
        <form onSubmit={handleAddition}>
          <label>
            Enter Description
            <br />
            <input
              onChange={(ev) => setDesc(ev.target.value)}
              type="text"
              required
            />
          </label>
          <br />
          <label>
            Enter Amount
            <br />
            <input
              onChange={(ev) => setAmount(ev.target.value)}
              type="number"
              required
            />
          </label>
          <br />
          <input type="submit" value="Add transaction" />
        </form>
      </div>
    </div>
  );
}

export default Main;
