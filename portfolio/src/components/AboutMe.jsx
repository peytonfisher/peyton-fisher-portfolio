import React, { useState, useEffect } from 'react';
import '../styles/AboutMe.css';
import profileImage from '../assets/images/headshot.png';

const AboutMe = () => {
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
      <h2 className="greeting">Hi! Thanks for being here.</h2>
      <div className={`left-side ${showLeft ? 'fade-in' : ''}`}>
        <img src={profileImage} alt="An image of myself" className="profile-image" />
      </div>
      <div className="right-side">
        <div className={`profile-section ${showProfileSection ? 'fade-in' : ''}`}>
          <div className="description">
            <p>
              I’m a full-stack developer with experience in webapp and mobile app development.
            </p>
            <p>
              I’m a graduate from the University of South Carolina,
              with a degree in Computer Information Systems and Business
              Information Systems.
            </p>
            <p>
              I love experimenting and learning new ways to bring my projects and growing
              list of endeavors to life!
            </p>
          </div>
        </div>

        <div className={`skills-section ${showSkillsSection ? 'fade-in' : ''}`}>
          <ul className="skills-list">
            <li>React</li>
            <li>Java, C++, Javascript (HTML/CSS), Kotlin</li>
            <li>REST API & Database Integration</li>
            <li>Microsoft Azure</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
