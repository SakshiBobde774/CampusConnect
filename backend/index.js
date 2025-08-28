// filepath: backend/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/campusconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Existing routes
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

// Auth routes
app.use('/api/auth', require('./routes/auth'));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});