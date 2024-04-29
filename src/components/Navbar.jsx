import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"; 


function Navbar() {

  const { isLoggedIn, logOut, user } = useContext(AuthContext);

  return (

   <div className="navbar">
    
     <div  className="nav-profile">
      {isLoggedIn && (<img className="profilePic"
       src={isLoggedIn ? user.img : "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"}/>
       )}  
      {isLoggedIn && (<p>{user.name}</p>)} 
    </div>

    <div className="nav-links">
    <Link to="/about">About</Link>
    {isLoggedIn && (<Link className="nav-link" to="/transactions">Transactions</Link>)}
    {!isLoggedIn && (<Link className="nav-link" to="/signup">Signup</Link>)}
    {!isLoggedIn && (<Link className="nav-link" to="/login">Login</Link>)}
      {isLoggedIn && (
        <button className="nav-btn" onClick={logOut}>Log Out</button>)}
    </div> 


    </div> 
  )
  
}

export default Navbar;