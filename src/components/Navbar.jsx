import { useState, useEffect } from 'react';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { useTheme } from '../hooks/useTheme';
import { useScrollSpy } from '../hooks/useScrollSpy';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  
  const activeSection = useScrollSpy(['home', 'about', 'skills', 'projects', 'contact'], 100);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all ${scrolled ? 'shadow-sm py-2' : 'py-4'}`} 
         style={{ 
           backgroundColor: scrolled ? 'rgba(var(--bs-body-bg-rgb), 0.85)' : 'transparent',
           backdropFilter: scrolled ? 'blur(16px)' : 'none',
           WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
           borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
         }}>
      <div className="container">
        <a className="navbar-brand fw-bolder text-body fs-4 tracking-wide clickable hover-primary transition-colors" href="#home" onClick={() => setIsNavCollapsed(true)}>
          SHAHANA<span className="text-primary">.</span>
        </a>
        <button 
          className="navbar-toggler border-0 clickable shadow-none" 
          type="button" 
          onClick={handleNavCollapse}
          aria-expanded={!isNavCollapsed} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold text-uppercase small tracking-wide">
            <li className="nav-item">
              <a className={`nav-link px-3 clickable transition-colors ${activeSection === 'home' || activeSection === '' ? 'active' : ''}`} href="#home" onClick={() => setIsNavCollapsed(true)}>Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link px-3 clickable transition-colors ${activeSection === 'about' ? 'active' : ''}`} href="#about" onClick={() => setIsNavCollapsed(true)}>About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link px-3 clickable transition-colors ${activeSection === 'skills' ? 'active' : ''}`} href="#skills" onClick={() => setIsNavCollapsed(true)}>Skills</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link px-3 clickable transition-colors ${activeSection === 'projects' ? 'active' : ''}`} href="#projects" onClick={() => setIsNavCollapsed(true)}>Projects</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link px-3 clickable transition-colors ${activeSection === 'contact' ? 'active' : ''}`} href="#contact" onClick={() => setIsNavCollapsed(true)}>Contact</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button 
              onClick={toggleTheme} 
              className="btn btn-sm btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center clickable border-0 bg-transparent hover-primary transition-colors"
              style={{ width: '40px', height: '40px' }}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <BsMoonStars size={18} /> : <BsSun size={18} className="text-body" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
