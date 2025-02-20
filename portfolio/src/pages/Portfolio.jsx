import React, { useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import '../styles/Portfolio.css';

const Portfolio = ({ aboutRef, projectsRef, contactRef }) => {
  useEffect(() => {
    if (aboutRef?.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [aboutRef]);
  
  return (
    <div className="portfolio">
      <section id="about-me" ref={aboutRef}>
        <AboutMe />
      </section>
      <section id="projects" ref={projectsRef}>
        <Projects />
      </section>
      <section id="contact" ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
};

export default Portfolio;
