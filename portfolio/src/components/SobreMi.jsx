import React, { useState, useEffect } from 'react';
import '../styles/AboutMe.css';
import profileImage from '../assets/images/headshot.png';


const SobreMi = () => {
  const [showLeft, setShowLeft] = useState(false);
  const [showProfileSection, setShowProfileSection] = useState(false);
  const [showSkillsSection, setShowSkillsSection] = useState(false);
 
  useEffect(() => {
    setTimeout(() => setShowLeft(true), 200);
    setTimeout(() => setShowProfileSection(true), 400);
    setTimeout(() => setShowSkillsSection(true), 600);
  }, []);
 
  return (
    <div className="about-me">
      <h2 className="greeting">¡Hola! Gracias por estar aquí.</h2>
      <div className={`left-side ${showLeft ? 'fade-in' : ''}`}>
        <img src={profileImage} alt="An image of myself" className="profile-image" />
      </div>
      <div className="right-side">
        <div className={`profile-section ${showProfileSection ? 'fade-in' : ''}`}>
          <div className="description">
            <p>
              Soy diseñadora y programadora de páginas web, con experiencia también
              en el desarrollo de aplicaciones móviles.
            </p>
            <p>
              Soy una graduada de la Universidad de Carolina del Sur, con un grado en
              Sistemas de Información Informática y Sistemas de Información Empresarial.
            </p>
            <p>
              He estudiado español la mayor parte de mi vida, y me encanta aprender todo lo que puedo
              sobre el idioma y especialmente las culturas del mundo hispanohablante.
            </p>
          </div>
        </div>
        <div className={`skills-section ${showSkillsSection ? 'fade-in' : ''}`}>
          <ul className="skills-list">
            <li>React</li>
            <li>Java, C++, Javascript (HTML/CSS), Kotlin</li>
            <li>Integración de REST APIs y Bases de Datos</li>
            <li>Microsoft Azure</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default SobreMi;