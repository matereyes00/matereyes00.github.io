import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About_/About'; // Import the About component
import Home from './Home_/Home'; // Import the About component
import './App.css';

function App() {
  
  
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            {/* About Page */}
            <Route path="/about" element={<About />} />
            {/* Catch-all route: Redirect unknown routes to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;