import React, { useContext, useState } from "react";
import TransactionsContext from "./TransactionsContext";

function Main() {
  let { transactions, addTransaction } = useContext(TransactionsContext);
  let [desc, setDesc] = useState("");
  let [amount, setAmount] = useState(0);

  function handleAddition(event) {
    event.preventDefault();
    addTransaction({
      amount: Number(amount),
      desc: desc,
    });
  }

  const income = () => {
    let totalIncome = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        totalIncome += transactions[i].amount;
        console.log(totalIncome);
      }
    }
    return totalIncome;
  };

  const expense = () => {
    let totalExpense = 0;
    for (let i in transactions) {
      if (transactions[i].amount < 0) {
        totalExpense += transactions[i].amount;
      }
    }
    return totalExpense;
  };

  const totalBalance = income() + expense();

  return (
    <div className="page-width">
      <div className="Header">
        <h1>Current Balance</h1>

        <h3>${totalBalance}</h3>
      </div>
      <div className="income-expense">
        <div className="income-box">
          <h3>Income</h3>
          <span>${income()}</span>
        </div>
        <div className="expense-box">
          <h3>Expense</h3>
          <span>${expense()}</span>
        </div>
      </div>
      <br />
      <br />
      <div className="transactions-list">
        <h3>Transactions History</h3>
        <ul className="trans-list">
          {transactions.map((obj) => {
            return (
              <li>
                <span>{obj.desc}</span>
                <span>{obj.amount}</span>
              </li>
            );
          })}
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
