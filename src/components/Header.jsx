import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="weblogo.png" alt="CyberSafe LK Logo" />
        <h1>CyberSafe LK</h1>
      </div>
      <nav className="header__nav">
        <a href="/">About</a>
        <a href="/">Contact Us</a>
        <a href="/">Admin</a>
      </nav>
    </header>
  );
}

export default Header;
