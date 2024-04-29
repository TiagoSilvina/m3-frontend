/* Import React / React-Router-Dom Features  */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* Import Axios Service */
import authService from "../services/auth.service";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png");

  // Initialize navigate
  const navigate = useNavigate();

  const {signup} = authService;

  const handleSignUpSubmit = (e) => {
    // Prevent Default Actions of the Form -> refresh the page.
    e.preventDefault();

    const reqBody = { email, password, name, img };

    signup(reqBody)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="enter-page">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form className="enter-form" onSubmit={handleSignUpSubmit}>
          <div className="form-element">
          <label className="enter-label">Username</label>
            <input className="enter-input"
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-element">
          <label className="enter-label">Email</label>
            <input className="enter-input" 
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="form-element">
          <label className="enter-label">Password</label>
            <input className="enter-input" 
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          
          <div className="form-element-btn">
          <button className="form-btn" type="submit">Sign up</button>
          </div>
          
          
        </form>
      </div>
    </div>
  );
}

export default Signup;
