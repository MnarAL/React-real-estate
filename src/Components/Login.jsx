import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const handleLoginClick = () => {
   
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password.");
      return;
    }

    
    onLogin();

   
    const redirectTo = location.state?.from || "/";
    navigate(redirectTo, { replace: true });
  };

  return (
    <div>
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Login;
