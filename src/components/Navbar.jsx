import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 0.8rem', // Thoda space adjust kiya
    fontWeight: 500,
    padding: '0.5rem 0',
    borderBottom: '2px solid transparent',
    transition: 'border-color 0.3s'
  };

  const activeLinkStyle = {
    borderColor: 'white'
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" style={{...navLinkStyle, border: 'none', fontSize: '1.5rem'}}>CampusConnect</Link>
      </div>
      <nav className="nav-links">
        <NavLink to="/" style={({isActive}) => isActive ? {...navLinkStyle, ...activeLinkStyle} : navLinkStyle}>Home</NavLink>
        <NavLink to="/hackathons" style={({isActive}) => isActive ? {...navLinkStyle, ...activeLinkStyle} : navLinkStyle}>Hackathons</NavLink>
        <NavLink to="/sports" style={({isActive}) => isActive ? {...navLinkStyle, ...activeLinkStyle} : navLinkStyle}>Sports</NavLink>
        <NavLink to="/communities" style={({isActive}) => isActive ? {...navLinkStyle, ...activeLinkStyle} : navLinkStyle}>Communities</NavLink>
        <NavLink to="/events" style={({isActive}) => isActive ? {...navLinkStyle, ...activeLinkStyle} : navLinkStyle}>Events</NavLink>
        <NavLink to="/seminars" style={({isActive}) => isActive ? {...navLinkStyle, ...activeLinkStyle} : navLinkStyle}>Seminars</NavLink>
        <NavLink to="/activities" style={({isActive}) => isActive ? {...navLinkStyle, ...activeLinkStyle} : navLinkStyle}>Activities</NavLink>
        <NavLink to="/about" style={({isActive}) => isActive ? {...navLinkStyle, ...activeLinkStyle} : navLinkStyle}>About</NavLink>
        <NavLink to="/contact" style={({isActive}) => isActive ? {...navLinkStyle, ...activeLinkStyle} : navLinkStyle}>Contact</NavLink>
      </nav>
      <div className="user-actions">
        <a href="#" className="profile-link">Profile</a>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;