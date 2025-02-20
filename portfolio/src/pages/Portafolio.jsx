import React, { useEffect } from 'react';
import SobreMi from '../components/SobreMi';
import Proyectos from '../components/Proyectos';
import Contactar from '../components/Contactar';
import '../styles/Portfolio.css';

const Portafolio = ({ aboutRef, projectsRef, contactRef }) => {
  useEffect(() => {
    if (aboutRef?.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [aboutRef]);

  return (
    <div className="portfolio" ref={aboutRef}>
      <section id="about-me" ref={aboutRef}>
        <SobreMi/>
      </section>
      <section id="projects" ref={projectsRef}>
        <Proyectos/>
      </section>
      <section id="contact" ref={contactRef}>
        <Contactar/>
      </section>
    </div>
  );
};

export default Portafolio;
