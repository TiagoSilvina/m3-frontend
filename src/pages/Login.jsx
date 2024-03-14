/* Import React / React-Router-Dom Features  */
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

/* Import Context */
import { AuthContext } from "../context/auth.context";

/* Import Axios Service */
import authService from "../services/auth.service";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");
  const { saveToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { login } = authService;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const reqBody = { email, password, img };

    login(reqBody)
      .then((response) => {
        saveToken(response.data.authToken);
        authenticateUser();
        navigate("/transactions");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-control">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Profile Picture</label>
          <input
            type="text"
            name="img"
            value={img}
            placeholder="Edit picture URL"
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div>
        <button className="btn" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
