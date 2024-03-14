import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" to="/signup">Sign Up</Link>
    <br></br>
    <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" to="/login">Login</Link>
    <br></br>
    <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" to="/login">About Us</Link>
    </div>
    
  )
}

export default Home