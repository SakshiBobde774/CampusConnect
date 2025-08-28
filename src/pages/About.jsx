import React from 'react';
import { FaBullhorn, FaUsersCog, FaCertificate } from 'react-icons/fa';

const teamMembers = [
  { name: 'Rohan Sharma', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400' },
  { name: 'Priya Verma', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400' },
  { name: 'Amit Singh', role: 'Head of Community', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
];

const About = () => {
  return (
    <div className="page-container">
      <div className="about-hero">
        <h1>About This Student Portal</h1>
        <p className="about-subtitle">This portal has been developed by the [College IT Department / Student Council] to centralize all important information for students. Our goal is to make it easier to access notices, participate in events, and stay informed about campus life.</p>
      </div>

      <section className="about-section">
        <div className="about-mission">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>Our mission is to provide a single, unified platform where students can discover events, form teams, showcase their achievements, and connect with like-minded peers. We believe that the best learning happens outside the classroom, and we're here to make those opportunities accessible to everyone.</p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500" alt="Students collaborating" />
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">Portal Features</h2>
        <div className="features-grid">
          <div className="feature-item card">
            <FaBullhorn size={40} className="feature-icon" />
            <h3>Centralized Notices & Events</h3>
            <p>Access a unified notice board and calendar for all official academic deadlines, cultural fests, technical workshops, and sports fixtures.</p>
          </div>
          <div className="feature-item card">
            <FaUsersCog size={40} className="feature-icon" />
            <h3>Club & Team Management</h3>
            <p>Dedicated pages for all recognized student clubs. Manage member lists, post internal announcements, and coordinate your activities.</p>
          </div>
          <div className="feature-item card">
            <FaCertificate size={40} className="feature-icon" />
            <h3>Digital Co-curricular Record</h3>
            <p>An official digital record of your participation and achievements in college events, which can be used for your portfolio.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;