import React from 'react';

const sportsData = [
  { name: 'Cricket', img: 'https://images.unsplash.com/photo-1595435941552-21c17c46927d?w=500' },
  { name: 'Basketball', img: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500' },
  { name: 'Football', img: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=500' },
  { name: 'Badminton', img: 'https://images.unsplash.com/photo-1521587585386-3a6a2b37b42b?w=500' },
  { name: 'Chess', img: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=500' },
  { name: 'Athletics', img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500' },
];

const Sports = () => {
  return (
    <div className="page-container">
      <div className="featured-banner sports-banner">
        <h1>University Sports Wing</h1>
        <p>Get official updates from the sports council. Find schedules for team tryouts, view upcoming tournament fixtures, and see results.</p>
      </div>

      <h2 className="section-title">Explore Sports</h2>
      <div className="sports-grid">
        {sportsData.map(sport => (
          <div key={sport.name} className="sport-card" style={{backgroundImage: `url(${sport.img})`}}>
            <div className="sport-card-overlay">
              <h3>{sport.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Upcoming Tournaments</h2>
      <div className="event-list">
        <div className="event-item">
            <h4>Inter-Department Cricket Championship</h4>
            <p>Registrations open till 30th August 2025</p>
            <button className="card-button">Register Team</button>
        </div>
        <div className="event-item">
            <h4>University Chess Tournament</h4>
            <p>Finals on 15th September 2025</p>
            <button className="card-button-secondary">View Schedule</button>
        </div>
      </div>
    </div>
  );
};

export default Sports;