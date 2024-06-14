    import React from 'react';
    import './Login.css';

    const Login = () => {
    return (
        <div className="login-page">
        <div className="login-container">
            <h2>Admin Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="login-button">Login</button>

            
        </div>
            <div className="app-name">
                CyberSafe LK
            </div>
            <div className="loginlogo">
                <img src="weblogo.png" alt="" />
            </div>
        </div>
    );
    }

    export default Login;
