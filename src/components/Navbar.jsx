import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"; 

function Navbar() {

  const{user} = useContext(AuthContext);
  const { isLoggedIn, logOut } = useContext(AuthContext);

  /* const getCurrentLinkText = (pathname) => {
    const routes = {
                    "/":"Home",
                    "/signup":"Signup",
                    "/login":"Login",
                    "/transactions":"List of transactions",
                    "/transactions/:id":"Transaction details",
                    "/edit-transaction/:id":"Edit transaction",
                    "/add-transaction":"Add transaction"
            };
            for (let route in routes) {
              let regexPattern = new RegExp("^" + route.replace(/:\w+/g, "\\w+") + "$");
              if (regexPattern.test(pathname)) {
                return routes[route];
              };
    }}; */


  return (
    <div className="navbar">

    <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/transactions">Transactions</Link>
    {!isLoggedIn && (<Link to="/signup">Signup</Link>)}
    {!isLoggedIn &&/*  location.pathname !== "/login" &&  */
    ((<Link to="/login">Login</Link>))}
    </div>
    <div  className="nav-profile">
      {isLoggedIn && (<h4> Hi {user.name}</h4>)}
      {isLoggedIn && (<img className="profilePic"
       src={isLoggedIn ? user.img : "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"}/>
       )}
       {isLoggedIn && (
         <button className="btn" onClick={logOut}>Log Out</button>
         )}
    </div>
    </div>
  )
}

export default Navbar;