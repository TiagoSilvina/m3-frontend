import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <h3>Don't have an account?</h3>
    <Link className='btn' to="/signup">Sign Up</Link>
    <h3>Already a member?</h3>
    <Link className='btn' to="/login">Login</Link>
    </div>
    
  )
}

export default Home