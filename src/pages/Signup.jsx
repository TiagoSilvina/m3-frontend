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
    <div>
      <h1>Sign-up</h1>
      <form onSubmit={handleSignUpSubmit}>
        <div className="form-control">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Choose a password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={name}
            placeholder="Choose a Username"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Profile Picture</label>
          <input
            type="text"
            name="img"
            value={img}
            placeholder="Enter picture URL"
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
