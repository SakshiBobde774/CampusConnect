import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Lakshmi Narain College of Technology Bhopal</h4>
          <p>Official Student Portal for all academic and co-curricular activities.</p>
          <p style={{ marginTop: '1rem', color: '#94a3b8' }}>Raisen Road, Bhopal, MP, India</p>
        </div>

        <div className="footer-column">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Portal</Link></li>
            <li><Link to="/events">Events Calendar</Link></li>
            <li><Link to="/communities">Student Clubs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Important Departments</h4>
          <ul className="footer-links">
            <li><a href="#">Student Affairs Office</a></li>
            <li><a href="#">Examination Cell</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">Hostel Administration</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Helpful Resources</h4>
          <ul className="footer-links">
            <li><a href="#">Academic Calendar</a></li>
            <li><a href="#">University Website</a></li>
            <li><a href="#">Anti-Ragging Policy</a></li>
            <li><a href="#">Grievance Redressal</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Lakshmi Narain College of Technology Bhopal. All Rights Reserved. Developed by the College IT Department.</p>
      </div>
    </footer>
  );
};

export default Footer;