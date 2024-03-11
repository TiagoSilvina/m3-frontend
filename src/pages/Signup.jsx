/* Import React / React-Router-Dom Features  */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

/* Import Axios Service */
import authService from "../services/auth.service";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  // Initialize navigate
  const navigate = useNavigate();

  const { signup } = authService;

  const handleSignUpSubmit = (e) => {
    // Prevent Default Actions of the Form -> refresh the page.
    e.preventDefault();

    const reqBody = { email, password, name };

    signup(reqBody)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.data.message;
        setError(errorDescription);
      });
  };

  return (
    <div>
      <Link to="/">Return to Home Page</Link>
      <h1>Sign-up Page</h1>
      <form onSubmit={handleSignUpSubmit}>
        <div className="form-control">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" type="submit">Sign Up</button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
