import React from 'react'
import { Link } from 'react-router-dom';
import Balance from '../components/Balance';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <br></br>
   {/*  <Balance/> */}
    <br></br>
    <Link to="/add-transaction">Add Transaction</Link>
    <br></br>
    <Link to="/transactions">Transactions</Link>
    </div>
    
  )
}

export default Home