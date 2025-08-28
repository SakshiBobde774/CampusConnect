import React from 'react';

const galleryImages = [
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500',
    'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=500',
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500'
];

const Activities = () => {
  return (
    <div className="page-container">
      <div className="featured-banner activity-banner">
        <h1>The Heartbeat of the Campus</h1>
        <p>Discover the vibrant life and culture that thrives within our community.</p>
      </div>

      <h2 className="section-title">Glimpses of Campus Life</h2>
      <div className="activity-gallery">
        {galleryImages.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Campus activity ${index + 1}`} />
          </div>
        ))}
      </div>

      <h2 className="section-title">What's Happening This Week</h2>
       <div className="event-list">
        <div className="event-item">
            <h4>Weekly Yoga & Wellness Session</h4>
            <p>Every Wednesday, 7:00 AM @ Sports Complex</p>
            <button className="card-button-secondary">Join Us</button>
        </div>
        <div className="event-item">
            <h4>Open Mic Night</h4>
            <p>Every Friday, 6:00 PM @ Student Cafe</p>
            <button className="card-button-secondary">Perform</button>
        </div>
      </div>
    </div>
  );
};

export default Activities;