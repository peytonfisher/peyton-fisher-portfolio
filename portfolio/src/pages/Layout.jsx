import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ aboutRef, projectsRef, contactRef }) => {
  const location = useLocation();
  const currentPage = location.pathname === '/portafolio' ? 'portafolio' : 'portfolio';

  return (
    <div className="wrapper">
      <Header 
        aboutRef={aboutRef} 
        projectsRef={projectsRef} 
        contactRef={contactRef} 
        currentPage={currentPage}
      />
      <main>
        <Outlet />
      </main>
      <Footer currentPage={currentPage} />
    </div>
  );
};

export default Layout;
