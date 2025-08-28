import React from 'react';
import { Link } from 'react-router-dom';
import './Feed.css'; // We'll use Feed.css for styling
import { FaCode, FaFutbol, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';

const Feed = () => {
  return (
    <div className="overview-dashboard">

      {/* Section 1: What's Next? */}
      <div className="overview-section">
        <h2 className="section-title">What's Happening Next? ⏳</h2>
        <div className="timeline">
          <Link to="/seminars" className="timeline-item">
            <p><strong>Now:</strong> Guest Lecture on "The Future of AI" is live!</p>
            <span>Watch Now ➔</span>
          </Link>
          <Link to="/sports" className="timeline-item">
            <p><strong>4 PM Today:</strong> Final selections for the Cricket Team.</p>
            <span>View Details ➔</span>
          </Link>
          <Link to="/hackathons" className="timeline-item">
            <p><strong>Tomorrow:</strong> Last day for Hack-o-Verse 5.0 registration!</p>
            <span>Register Here ➔</span>
          </Link>
        </div>
      </div>

      {/* Section 2: Latest Updates */}
      <div className="overview-section">
        <h2 className="section-title">Latest Updates 🔔</h2>
        <div className="updates-feed">
          <Link to="/sports" className="update-item">
            <span className="update-tag sports-tag">SPORTS</span>
            <p>The schedule for the Inter-branch Football league has been updated.</p>
            <span className="update-time">1 hour ago</span>
          </Link>
          <Link to="/hackathons" className="update-item">
            <span className="update-tag hackathon-tag">HACKATHON</span>
            <p>New prizes announced for CodeStorm 2025. Check them out!</p>
            <span className="update-time">5 hours ago</span>
          </Link>
          <Link to="/communities" className="update-item">
            <span className="update-tag community-tag">COMMUNITY</span>
            <p>The Photography Club just added new photos from their latest event.</p>
            <span className="update-time">Yesterday</span>
          </Link>
        </div>
      </div>

      {/* Section 3: Explore Sections */}
      <div className="overview-section">
        <h2 className="section-title">Explore Sections 🔗</h2>
        <div className="explore-grid">
          <Link to="/hackathons" className="explore-card">
            <FaCode size={40} />
            <h3>Hackathons & Tech</h3>
          </Link>
          <Link to="/sports" className="explore-card">
            <FaFutbol size={40} />
            <h3>Sports & Fitness</h3>
          </Link>
          <Link to="/seminars" className="explore-card">
            <FaChalkboardTeacher size={40} />
            <h3>Seminars & Workshops</h3>
          </Link>
          <Link to="/communities" className="explore-card">
            <FaUsers size={40} />
            <h3>Clubs & Communities</h3>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Feed;