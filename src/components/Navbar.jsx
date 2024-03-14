import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"; 



function Navbar() {

  const { isLoggedIn, logOut, user } = useContext(AuthContext);

  return (

    <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/about">About</Link></li>
        <li>{isLoggedIn && (<Link to="/transactions">Transactions</Link>)}</li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
        {isLoggedIn && (<p class="btn btn-ghost text-xl"> Welcome {user.name}</p>)}
  </div>
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={isLoggedIn ? user.img : "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>{!isLoggedIn && (<Link to="/signup">Signup</Link>)}</li>
        <li>{!isLoggedIn && (<Link to="/login">Login</Link>)}</li>
        <li>{isLoggedIn && (
         <button className="btn" onClick={logOut}>Log Out</button>
         )}</li>
      </ul>
    </div>
</div>


/*     
    <div className="navbar">
    <div className="nav-links">
    <Link to="/about">About</Link>
    {isLoggedIn && (<Link to="/transactions">Transactions</Link>)}
    {!isLoggedIn && (<Link to="/signup">Signup</Link>)}
    {!isLoggedIn &&
    ((<Link to="/login">Login</Link>))}
    </div>
    <div  className="nav-profile">
      {isLoggedIn && (<img className="profilePic"
       src={isLoggedIn ? user.img : "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"}/>
       )}
       {isLoggedIn && (<p>{user.name}</p>)}
       {isLoggedIn && (
         <button className="btn" onClick={logOut}>Log Out</button>
         )}
    </div>
    </div> */
  )
}

export default Navbar;