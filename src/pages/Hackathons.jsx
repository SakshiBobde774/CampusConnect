import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Button from '@mui/material/Button';

const HackathonsPage = () => {
  const [hackathons, setHackathons] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/hackathons')
      .then(res => res.json())
      .then(data => setHackathons(data));
  }, []);

  const filteredHackathons = hackathons.filter(hackathon => {
    if (activeFilter !== 'All' && hackathon.status !== activeFilter) return false;
    if (search && !hackathon.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="page-container">
      <div className="featured-banner hackathon-banner">
        <h1>Official College Hackathons</h1>
        <p>Participate in official hackathons, solve real-world problems, and showcase your skills.</p>
      </div>

      <div className="resource-controls card">
        <div className={`search-bar${searchActive ? ' active' : ''}`}>
          <SearchRoundedIcon style={{ color: searchActive ? '#1976d2' : '#888', fontSize: 22 }} />
          <input
            type="text"
            placeholder="Search for hackathons..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onFocus={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
          />
        </div>
        <div className="filters">
          <Button variant={activeFilter === 'All' ? 'contained' : 'outlined'} onClick={() => setActiveFilter('All')}>
            All
          </Button>
          <Button variant={activeFilter === 'Upcoming' ? 'contained' : 'outlined'} onClick={() => setActiveFilter('Upcoming')}>
            Upcoming
          </Button>
          <Button variant={activeFilter === 'Ongoing' ? 'contained' : 'outlined'} onClick={() => setActiveFilter('Ongoing')}>
            Ongoing
          </Button>
        </div>
      </div>
      
      <div className="card-grid">
        {filteredHackathons.map(hackathon => (
          <div key={hackathon.id} className="card">
            <h2>{hackathon.title}</h2>
            <p>{hackathon.description}</p>
            <span>{hackathon.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonsPage;