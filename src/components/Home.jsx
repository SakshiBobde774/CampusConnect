import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-subtitle"><b>HELLO STUDENTS</b></h2>
        <h1 className="hero-title">Welcome to the LNCT Student Portal</h1>
        <p className="hero-description"><b>Your official source for all academic announcements, event registrations, club activities, and notices</b></p>
        <Link to="/overview">
          <button className="join-btn">Overview</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;