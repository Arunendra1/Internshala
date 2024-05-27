import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">unfluke</div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#leaderboard" className="nav-link">Leaderboard</a></li>
        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
