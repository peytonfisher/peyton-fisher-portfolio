import React, { useState, useEffect, useRef } from 'react';
import '../styles/Projects.css';
import projectOne from '../assets/images/vacation-planner-home.png';
import projectOneAlt from '../assets/images/vacationplanner.png';
import projectTwo from '../assets/images/dead-reckoning.png';
import projectTwoAlt from '../assets/images/dead-reckoning-nav.png';

const projects = [
  {
    id: 1,
    title: "Planificador de Vacaciones",
    description: "Un proyecto de colaboración con Capgemini",
    projectDescription: "El Planificador Interactivo de Vacaciones es una plataforma todo en uno para que los usuarios planifiquen y reserven las vacaciones de sus sueños. This application integrates with those sites and utilizes OpenAI to simplify and enhance the planning process.",
    codeDescription: "Este proyecto estará terminado en mayo de 2025. Estoy diseñando UI, desarrollando el front-end, configurando el acceso a la base de datos y configurando las API utilizadas.",
    resources: "Front-end: React/Javascript/HTML/CSS, ReactDOM, Axios, React Router DOM",
    resourcesTwo: "Back-end/Base de Datos: Spring Boot, Java, MongoDB, OpenAI, REST APIs, Autho0, Microsoft Azure",
    image: projectOne,
    imageTwo: projectOneAlt,
    // link: "/project1-details",
  },
  {
    id: 2,
    title: "Dead Reckoning",
    description: 'Un proyecto que utiliza el concepto de "dead reckoning"',
    codeDescription: "Esta aplicación para móviles Android puede seguir la posición de un usuario por sensores IMU y calculando la aceleración, la velocidad angular y el tiempo.",
    resources: "Mi compañero de proyecto y yo utilizamos Kotlin para programar esta aplicación, y estamos incorporando la API de Google Maps y microcontroladores en las pruebas de desarrollo.",
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

const Proyectos = () => {
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
        <h2>Mis Proyectos</h2>
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
                Ver Detalles
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

export default Proyectos;
