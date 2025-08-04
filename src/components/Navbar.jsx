import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">Lewis.dev</div>
        <ul className="nav-links">
          <li><button onClick={() => scrollTo('home')}>Inicio</button></li>
          <li><button onClick={() => scrollTo('projects')}>Proyectos</button></li>
          <li><button onClick={() => scrollTo('skills')}>Habilidades</button></li>
          <li><button onClick={() => scrollTo('contact')}>Contacto</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
