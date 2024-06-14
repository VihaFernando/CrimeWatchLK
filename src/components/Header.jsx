import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="weblogo.png" alt="CyberSafe LK Logo" />
        <h1>CyberSafe LK</h1>
      </div>
      <nav className="header__nav">
        <Link to="/">About</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/login">Admin</Link>
      </nav>
    </header>
  );
}

export default Header;
