import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import LoadingScreen from './LoadingScreen';

function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        navigate('/login');
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, navigate]);

  const handleAdminClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src="weblogo.png" alt="CyberSafe LK Logo" />
          <h1>CrimeWatch LK</h1>
        </div>
        <nav className="header__nav">
          <Link to="/">About</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/login" onClick={handleAdminClick}>Admin</Link>
        </nav>
      </header>
      {isLoading && <LoadingScreen />}
    </>
  );
}

export default Header;
