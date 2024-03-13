import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"; 

function Navbar() {

  const{user} = useContext(AuthContext);
  const { isLoggedIn, logOut } = useContext(AuthContext);


  return (
    <div className="navbar">

    <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/transactions">Transactions</Link>
    {!isLoggedIn && (<Link to="/signup">Signup</Link>)}
    {!isLoggedIn && (<Link to="/login">Login</Link>)}
    </div>
    <div  className="nav-profile">
    {isLoggedIn && (
      <button className="btn" onClick={logOut}>Log Out</button>
      )}
      <img className="profilePic"
       src={isLoggedIn ? user.img : "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"}/>
    </div>

    </div>
  )
}

export default Navbar;