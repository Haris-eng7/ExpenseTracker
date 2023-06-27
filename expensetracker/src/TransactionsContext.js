import React, { createContext, useReducer } from "react";
import TransactionsReducer from "./TransactionsReducer";

const transactionsArray = [
  {
    desc: "Cash",
    amount: 200,
  },
  {
    desc: "Bill",
    amount: -20,
  },
  {
    desc: "Salary",
    amount: 700,
  },
  {
    desc: "Mortgage",
    amount: -150,
  },
];

const TransactionsContext = createContext(transactionsArray);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionsReducer, transactionsArray);

  function addTransaction(states) {
    dispatch({
      type: "ADD",
      payload: {
        desc: states.desc,
        amount: states.amount,
      },
    });
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state,
        addTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContext;
