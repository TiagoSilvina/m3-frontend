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
    <div className="enter-page">
      <div className="form-container">
        <h1>Login</h1>
        <form className="enter-form" onSubmit={handleLoginSubmit}>
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
          
          {/* <div className="form-element">
          <label className="enter-label">Profile picture</label>
            <input className="enter-input"
              type="text"
              name="img"
              placeholder="Edit picture URL"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div> */}
          <div className="form-element-btn">
          <button className="form-btn" type="submit">Login</button>
          </div>
          
          
        </form>
      </div>
    </div>
  );
};

export default Login;
