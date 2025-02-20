import React from 'react';
import '../styles/Header.css';

const Header = ({ aboutRef, projectsRef, contactRef, currentPage }) => {
  const handleScroll = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Peyton Fisher</h1>
      </div>
      <nav className="header-right">
        <button onClick={() => handleScroll(aboutRef)}>
          {currentPage === 'portfolio' ? 'About' : 'Sobre mí'}
        </button>
        <button onClick={() => handleScroll(projectsRef)}>
          {currentPage === 'portfolio' ? 'Projects' : 'Proyectos'}
        </button>
        <button onClick={() => handleScroll(contactRef)}>
          {currentPage === 'portfolio' ? 'Contact' : 'Contacto'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
