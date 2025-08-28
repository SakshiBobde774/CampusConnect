import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage.jsx';
import OverviewPage from './pages/OverviewPage.jsx';
import Hackathons from './pages/Hackathons.jsx';
import Sports from './pages/Sports.jsx';
import Communities from './pages/Communities.jsx';
import Events from './pages/Events.jsx';
import Seminars from './pages/Seminars.jsx';
import Activities from './pages/Activities.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/hackathons" element={<Hackathons/>} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/events" element={<Events/>} />
            <Route path="/seminars" element={<Seminars />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;