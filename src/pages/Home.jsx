import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <br></br>
    <Link to="/signup">signup</Link>
    <br></br>
    <Link to="/login">login</Link>
    <br></br>
    <Link to="/transactions">list</Link>
    <br></br>
    <Link to="/transactions/:id">details</Link>
    <br></br>
    <Link to="/edit-transaction/:id">list</Link>
    <br></br>
    <Link to="/add-transaction">add</Link>
    </div>
    
  )
}

export default Home