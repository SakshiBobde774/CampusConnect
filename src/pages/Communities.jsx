import React from 'react';

const communitiesData = [
  { id: 1, name: 'The Coding Club', desc: 'A community for students passionate about coding and technology.', members: '250+', category: 'Technical' },
  { id: 2, name: 'Shutterbugs', desc: 'The Photography Club. Capture moments, learn skills, and share your perspective.', members: '120+', category: 'Arts' },
  { id: 3, name: 'Orators', desc: 'The Public Speaking & Debating Society. Find your voice and inspire.', members: '90+', category: 'Cultural' },
  { id: 4, name: 'E-Cell', desc: 'The Entrepreneurship Cell. Building the next generation of founders.', members: '150+', category: 'Technical' }
];

const CommunityCard = ({ community }) => (
  <div className="card community-card">
    <div className="card-header">
      <h3>{community.name}</h3>
      <span className="tag category-tag">{community.category}</span>
    </div>
    <p className="card-tagline">{community.desc}</p>
    <div className="card-footer">
      <span><strong>{community.members}</strong> Members</span>
      <button className="card-button">Learn More</button>
    </div>
  </div>
);

const CommunitiesPage = () => {
  return (
    <div className="page-container">
      <div className="featured-banner community-banner">
        <h1>Recognized Student Clubs & Committees</h1>
        <p>The official directory of all student-run clubs and committees. Find contact details for club heads and information on how to join.</p>
      </div>

      <div className="filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Technical</button>
        <button className="filter-btn">Cultural</button>
        <button className="filter-btn">Arts</button>
      </div>

      <div className="card-grid">
        {communitiesData.map(c => <CommunityCard key={c.id} community={c} />)}
      </div>
    </div>
  );
};

export default CommunitiesPage;