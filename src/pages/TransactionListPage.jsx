import { Link } from "react-router-dom";import React from 'react';
import { useState, useEffect } from "react";
import Balance from '../components/Balance';
import TransactionCard from "../components/TransactionCard";

function TransactionListPage() {

  return (
    <div>
   
    <Balance/>
            <Link to="/add-transaction">
            <h1 className="btn">Add Transaction</h1>
            </Link>
            <TransactionCard/>
    </div>
  )
}

export default TransactionListPage;