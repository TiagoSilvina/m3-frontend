import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"; 

function Navbar() {

  const { isLoggedIn, logOut, user } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 content-between">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/about">About</Link></li>
      {!isLoggedIn && (<li><Link to="/signup">Signup</Link></li>)}
      {!isLoggedIn && (<li><Link to="/login">Login</Link></li>)}
      </ul>
    </div>
    <div className="navbar-center">
    {isLoggedIn && (<Link className="btn btn-ghost text-xl" to="/transactions">Transactions</Link>)}
  </div>
    <div className="navbar-end dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        {isLoggedIn && (<img src={isLoggedIn ? user.img : "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"} />)} 
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {isLoggedIn && ( <li><button onClick={logOut}>Log Out</button></li>)}
      </ul>
    </div>
  </div>
</div>)




    {/* <div className="navbar">
    <div  className="nav-profile">
      {isLoggedIn && (<h4> Hi {user.name}</h4>)}
       {isLoggedIn && (<img className="profilePic"
       src={isLoggedIn ? user.img : "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"}/>
       )} 
    </div>
    <div className="nav-links">
    {!isLoggedIn && (<Link to="/">Home</Link>)}
    <Link to="/transactions">Transactions</Link>
    {!isLoggedIn && (<Link to="/signup">Signup</Link>)}
    {!isLoggedIn && (<Link to="/login">Login</Link>)}
      {isLoggedIn && (
        <button className="btn" onClick={logOut}>Log Out</button>
        )}
    </div>
    </div> */}
  
}

export default Navbar;