import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"; 

function Navbar() {

  const { isLoggedIn, logOut, user } = useContext(AuthContext);
  
  return (
    <div className="navbar">
    <div className="nav-links">
    <Link to="/about">About</Link>
    {isLoggedIn && (<Link to="/transactions">Transactions</Link>)}
    {!isLoggedIn && (<Link to="/signup">Signup</Link>)}
    {!isLoggedIn &&/*  location.pathname !== "/login" &&  */
    ((<Link to="/login">Login</Link>))}
      {isLoggedIn && (<p>{user.name}</p>)}
      {isLoggedIn && (
        <button className="btn" onClick={logOut}>Log Out</button>
        )}
    </div>
    <div  className="nav-profile">
      {isLoggedIn && (<img className="profilePic"
       src={isLoggedIn ? user.img : "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"}/>
       )}
    </div>
    </div>
  )
}

export default Navbar;