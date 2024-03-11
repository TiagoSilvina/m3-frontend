import { useEffect, useState } from "react";
import { Link } from "react-router-dom";import React from 'react';

import transactionsService from "../services/transactions.service";

function TransactionListPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    transactionsService
      .getAllTransactions()
      .then((response) => setTransactions(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
<div>
    <Link to="/">Return to Home Page</Link>
    <Link className="link-button" to="/add-transaction">
    <h1>Add Transaction</h1>
    </Link>
      {transactions &&
        transactions.map((transaction) => {
          return (
            <div key={transaction._id} >
              <Link to={`/transactions/${transaction._id}`}>
                <h3>{transaction.text}</h3>
                <p>{transaction.amount}</p>
                <p>{transaction.description}</p>
                <p>{transaction.category}</p>
                <p>{transaction.date}</p>
              </Link>
              <Link to={`/edit-transaction/${transaction._id}`}>
                <p>Edit transaction</p>
              </Link>
            </div>
          );
        })}
    </div>
  )
}

export default TransactionListPage;