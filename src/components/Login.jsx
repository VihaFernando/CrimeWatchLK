import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic (authentication, etc.) here

    // Assuming login is successful, navigate to AdminInterface
    navigate('/admin');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Admin Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
      <div className="app-name">
        CyberSafe LK
      </div>
      <div className="loginlogo">
        <img src="weblogo.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
