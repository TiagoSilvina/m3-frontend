import { Link } from "react-router-dom";import React from 'react';
import { useState, useEffect } from "react";
import Balance from '../components/Balance';
import TransactionCard from "../components/TransactionCard";
/* import transactionsService from "../services/transactions.service"; */
/* import Graph from "../components/Graph" */

function TransactionListPage() {

  return (
    <div className="page">
    <div className="balance-box">
    <Balance/>
    </div>
    <TransactionCard/>
    </div>
  )
}

export default TransactionListPage;