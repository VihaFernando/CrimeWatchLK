import React from 'react';
import {Link} from 'react-router-dom';
import './AdminHeader.css';

function AdminHeader() {

  return (
    <header className="header">
      <div className="header__logo">
        <img src="weblogo.png" alt="CyberSafe LK Logo" />
        <h1>CrimeWatch LK</h1>
      </div>
      <nav className="header__nav">
        <Link to="/admin">Dashboard</Link>
        <Link to="/">Case Management</Link>
      </nav>
    </header>
  );
}

export default AdminHeader;
