import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
//import './Header.css'; // Step 1: Import the CSS file

const Header = () => {
  // State to manage whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link" onClick={handleLinkClick}>
          CampusConnect
        </Link>
      </div>

      {/* Hamburger menu icon - only visible on mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation menu - class changes based on 'menuOpen' state */}
      <div className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <nav className="nav-links">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>Home</NavLink>
          <NavLink to="/hackathons" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>Hackathons</NavLink>
          <NavLink to="/sports" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>Sports</NavLink>
          <NavLink to="/communities" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>Communities</NavLink>
          <NavLink to="/events" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>Events</NavLink>
          <NavLink to="/seminars" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>Seminars</NavLink>
          <NavLink to="/activities" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>Activities</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>Contact</NavLink>
        </nav>

        <div className="user-actions">
           {/* Use Link component for better SPA navigation */}
          <Link to="/profile" className="action-link profile-link" onClick={handleLinkClick}>Profile</Link>
          <Link to="/signup" className="action-link signup-link" onClick={handleLinkClick}>SignUp</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;