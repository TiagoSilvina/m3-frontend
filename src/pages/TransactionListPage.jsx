import { Link } from "react-router-dom";import React from 'react';
import { useState, useEffect } from "react";
import Balance from '../components/Balance';
import TransactionCard from "../components/TransactionCard";
import transactionsService from "../services/transactions.service";

function TransactionListPage() {

  return (
    <div>
    <Link to="/">Return to Home Page</Link>
    <Balance/>
            <Link className="add-button" to="/add-transaction">
            <h1>Add Transaction</h1>
            </Link>
            <TransactionCard/>
    </div>
  )
}

export default TransactionListPage;