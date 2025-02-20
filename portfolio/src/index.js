import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Portafolio from './pages/Portafolio'; 
import Layout from './pages/Layout';
import './index.css';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout 
              aboutRef={aboutRef} 
              projectsRef={projectsRef} 
              contactRef={contactRef} 
            />} 
        >
          <Route index element={<Portfolio 
            aboutRef={aboutRef} 
            projectsRef={projectsRef} 
            contactRef={contactRef} 
          />} />
          <Route 
            path="/portfolio" 
            element={<Portfolio 
              aboutRef={aboutRef} 
              projectsRef={projectsRef} 
              contactRef={contactRef} 
            />} 
          />
          <Route 
            path="/portafolio" 
            element={<Portafolio 
              aboutRef={aboutRef} 
              projectsRef={projectsRef} 
              contactRef={contactRef} 
            />} 
          />
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
