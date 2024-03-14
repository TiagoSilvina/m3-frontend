import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <Link className='btn' to="/signup">Sign Up</Link>
    <br></br>
    <Link className='btn' to="/login">Login</Link>
    <br></br>
    <Link className='btn' to="/login">About Us</Link>
    </div>
    
  )
}

export default Home