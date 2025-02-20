import React, { useState, useEffect, useRef } from 'react';
import '../styles/Contact.css';

const Contactar = () => {
  const [status, setStatus] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const aboutRef = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContactForm(true);
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    formData.append('access_key', process.env.REACT_APP_WEB3FORMS_API_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <div className={`contact-form ${showContactForm ? 'fade-in' : ''}`} ref={aboutRef} >
      <h2>Contacta Conmigo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Enviar</button>
      </form>

      {status === 'SUCCESS' && <p className="success-message">Thanks! Your message has been sent.</p>}
      {status === 'ERROR' && <p className="error-message">Oops! Something went wrong. Please try again later.</p>}
    </div>
  );
};

export default Contactar;
