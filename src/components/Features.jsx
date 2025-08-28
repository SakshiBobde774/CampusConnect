import React from 'react';
// We are now importing modern icons from the 'react-icons/io5' (Ionicons) set
import { IoCalendarOutline, IoPeopleOutline, IoRibbonOutline } from 'react-icons/io5';

const featuresData = [
  {
    icon: <IoCalendarOutline size={40} />,
    title: 'Explore Events',
    description: 'Find and join campus-wide competitions and cultural events.',
  },
  {
    icon: <IoPeopleOutline size={40} />,
    title: 'Manage Teams',
    description: 'Create and collaborate with peers in team-based events.',
  },
  {
    icon: <IoRibbonOutline size={40} />,
    title: 'Track Achievements',
    description: 'View certificates, event history, and build your student portfolio.',
  },
];

const Features = () => {
  return (
    <section className="features-section">
      {featuresData.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;