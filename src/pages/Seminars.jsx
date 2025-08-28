import React, { useState } from 'react';

const seminarsData = [
  { status: 'Upcoming', title: 'The Future of Artificial Intelligence', speaker: 'Dr. Alok Nath', dept: 'Computer Science', date: 'August 28, 2025' },
  { status: 'Upcoming', title: 'Marketing Strategies for the Digital Age', speaker: 'Ms. Sunita Maheshwari', dept: 'Management', date: 'September 05, 2025' },
  { status: 'Past', title: 'Introduction to Quantum Computing', speaker: 'Prof. R.K. Joshi', dept: 'Physics', date: 'July 15, 2025' },
  { status: 'Past', title: 'Sustainable Engineering Practices', speaker: 'Mr. Vikram Reddy', dept: 'Mechanical Engg.', date: 'June 22, 2025' },
];

const SeminarItem = ({ seminar }) => (
  <div className="seminar-item card">
    <div className="seminar-details">
      <span className="tag category-tag">{seminar.dept}</span>
      <h3>{seminar.title}</h3>
      <p><strong>Speaker:</strong> {seminar.speaker}</p>
      <p><strong>Date:</strong> {seminar.date}</p>
    </div>
    <div className="seminar-action">
      {seminar.status === 'Upcoming' ? (
        <button className="card-button">Register Now</button>
      ) : (
        <button className="card-button-secondary">Watch Recording</button>
      )}
    </div>
  </div>
);

const Seminars = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  const filteredSeminars = seminarsData.filter(s => s.status === activeTab);

  return (
    <div className="page-container">
      <div className="featured-banner seminar-banner">
        <h1>Knowledge Series</h1>
        <p>Engage with experts and broaden your horizons with our campus seminars.</p>
      </div>

      <div className="filters">
        <button className={`filter-btn ${activeTab === 'Upcoming' ? 'active' : ''}`} onClick={() => setActiveTab('Upcoming')}>
          Upcoming
        </button>
        <button className={`filter-btn ${activeTab === 'Past' ? 'active' : ''}`} onClick={() => setActiveTab('Past')}>
          Past Recordings
        </button>
      </div>

      <div className="seminar-list">
        {filteredSeminars.map((seminar, index) => (
          <SeminarItem key={index} seminar={seminar} />
        ))}
      </div>
    </div>
  );
};

export default Seminars;