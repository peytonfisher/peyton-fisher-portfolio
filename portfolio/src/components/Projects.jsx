import React, { useState, useEffect, useRef } from 'react';
import '../styles/Projects.css';
import projectOne from '../assets/images/vacation-planner-home.png';
import projectOneAlt from '../assets/images/vacationplanner.png';
import projectTwo from '../assets/images/dead-reckoning.png';
import projectTwoAlt from '../assets/images/dead-reckoning-nav.png';

const projects = [
  {
    id: 1,
    title: "Vacation Planner",
    description: "A collaborative project with Capgemini",
    projectDescription: "The Interactive Vacation Planner is an all-in-one platform for users to plan and book their dream vacation without having to travel between booking sites and coupon sites. This application integrates with those sites and utilizes OpenAI to simplify and enhance the planning process.",
    codeDescription: "This is an ongoing team effort with Capgemini and a small group of UofSC students to be finished by May 2025. I was involved with the process of designing the UI, developing the front-end for back-end communication, setting up database access, and configuring the APIs used.",
    resources: "Front-end Framework: React/Javascript/HTML/CSS, ReactDOM, Axios, React Router DOM",
    resourcesTwo: "Back-end/Database Framework: Spring Boot, Java, MongoDB, OpenAI, REST APIs, Autho0, Microsoft Azure",
    image: projectOne,
    imageTwo: projectOneAlt
    // link: "/project1-details",
  },
  {
    id: 2,
    title: "Dead Reckoning",
    description: "A project utilizing the concept of dead reckoning",
    codeDescription: "In collaboration with a partner, this Android mobile app can track a user's position through the device's IMU sensors and calculating acceleration, angular velocity, and time.",
    resources: "We used Kotlin to program this application, as well as incorporating Google Maps' API and microcontrollers in development testing.",
    resourcesTwo: "Framework: Kotlin",
    image: projectTwo,
    imageTwo: projectTwoAlt,
    // link: "/project2-details",
  },
  // {
  //   id: 3,
  //   title: "Portfolio 1.0",
  //   description: "A more experimental version of my portfolio",
  //   image: "/path/to/image3.jpg",
  //   link: "/project3-details",
  // },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [showTitle, setShowTitle] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const projectsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowTitle(true);
          setTimeout(() => setShowProjects(true), 200);
        }
      },
      { threshold: 0.5 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalVisible(false);
    setTimeout(() => setModalVisible(true), 10);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelectedProject(null), 300);
  };
  
  return (
    <div className="projects-container" ref={projectsRef}>
      <div className={`title ${showTitle ? 'fade-in' : ''}`}>
        <h2>My Projects</h2>
      </div>
      <div className={`projects-grid ${showProjects ? 'fade-in' : ''}`}>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <div className="project-content">
            <img src={project.image} alt={project.title} className="project-image" />
              <p>{project.description}</p>
              <button
                className="view-details-button"
                onClick={() => handleOpenModal(project)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {selectedProject && (
        <div
        className={`modal-overlay ${modalVisible ? "show" : "hide"}`}
        onClick={handleCloseModal}
      >
        <div
          className={`modal-content ${modalVisible ? "expand" : "shrink"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-button" onClick={handleCloseModal}>
            &times;
          </button>
          <h3>{selectedProject.title}</h3>
          <img
            src={selectedProject.imageTwo}
            alt={selectedProject.title}
            className="modal-image"
          />
          <div className="scrollable-content">
            <p>{selectedProject.projectDescription}</p>
            <p>{selectedProject.codeDescription}</p>
            <p>{selectedProject.resources}</p>
            <p>{selectedProject.resourcesTwo}</p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Projects;
