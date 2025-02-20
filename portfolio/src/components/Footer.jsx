import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = ({ currentPage }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  let hideTimeout = null;

  const handleSwitch = () => {
    if (currentPage === 'portfolio') {
      navigate('/portafolio');
    } else {
      navigate('/portfolio'); 
    }
  };
  

  const handleToggleVisibility = () => {
    setIsVisible(true);
    resetHideTimeout();
  };

  const resetHideTimeout = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };
  
  useEffect(() => {
    resetHideTimeout();

    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, []);


  return (
    <footer
      className={`footer ${isVisible ? 'visible' : 'hidden'}`}
      onClick={handleToggleVisibility}
    >
      <p>
        {currentPage === 'portfolio'
          ? '¿Habla español? '
          : 'To switch back to English, '}
        <span className="footer-link" onClick={handleSwitch}>
          {currentPage === 'portfolio' ? ' Haga clic aquí.' : ' click here.'}
        </span>
      </p>
    </footer>
  );
};

export default Footer;
