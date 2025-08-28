import React from 'react';

const eventsData = [
  { date: { day: '25', month: 'AUG' }, title: 'Annual Music Fest "Euphony"', time: '6:00 PM onwards', location: 'Main Auditorium', category: 'Cultural' },
  { date: { day: '02', month: 'SEP' }, title: 'Workshop on Advanced React Patterns', time: '10:00 AM - 1:00 PM', location: 'CSE Dept. Seminar Hall', category: 'Technical' },
  { date: { day: '10', month: 'SEP' }, title: 'The Grand Art Exhibition', time: 'All Day', location: 'Fine Arts Building', category: 'Arts' },
  { date: { day: '15', month: 'SEP' }, title: 'Guest Lecture on Start-up Culture', time: '2:00 PM', location: 'Main Auditorium', category: 'Seminar' },
];

const EventItem = ({ event }) => (
  <div className="event-list-item">
    <div className="event-date">
      <span>{event.date.month}</span>
      <strong>{event.date.day}</strong>
    </div>
    <div className="event-details">
      <span className={`tag category-tag event-category-${event.category.toLowerCase()}`}>{event.category}</span>
      <h3>{event.title}</h3>
      <p>{event.time} @ {event.location}</p>
    </div>
    <button className="card-button">View Details</button>
  </div>
);


const Events = () => {
  return (
    <div className="page-container">
      <div className="featured-banner event-banner">
        <h1>Official Events Calendar</h1>
        <p>The central calendar for all official college events, including cultural fests, technical workshops, and academic functions.</p>
      </div>
      <div className="filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Cultural</button>
        <button className="filter-btn">Technical</button>
        <button className="filter-btn">Workshops</button>
      </div>
      <div className="events-container">
        {eventsData.map((event, index) => (
          <EventItem key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;