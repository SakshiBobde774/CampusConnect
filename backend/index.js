// filepath: backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.get('/api/hackathons', (req, res) => {
  res.json([
    {
      id: 1,
      title: "AI Hackathon",
      date: "2025-09-10",
      description: "Build AI solutions in 24 hours.",
      status: "Upcoming"
    },
    {
      id: 2,
      title: "Web Dev Sprint",
      date: "2025-10-05",
      description: "Create web apps with your team.",
      status: "Ongoing"
    },
    {
      id: 3,
      title: "Mobile App Challenge",
      date: "2025-11-15",
      description: "Develop innovative mobile apps."
    },
    {
      id: 4,
      title: "Blockchain Bootcamp",
      date: "2025-12-20",
      description: "Learn and build on blockchain technology."
    }
  ]);
});

app.listen(5000, () => console.log('Backend running on port 5000'));