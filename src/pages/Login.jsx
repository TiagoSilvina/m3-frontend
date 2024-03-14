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
        <div className="input input-bordered flex items-center gap-2">
          <label>Email:</label>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input input-bordered flex items-center gap-2">
          <label>Password:</label>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input input-bordered flex items-center gap-2">
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
