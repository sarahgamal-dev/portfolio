import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const t = content[language].navbar;

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state
      setIsScrolled(window.scrollY > 50);

      // Scroll spy
      const sections = t.links.map(link => link.href.substring(1));
      sections.push('contact');
      
      let currentSection = activeSection;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t.links, activeSection]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="logo" onClick={closeMenu}>
          {t.logo}<span>.</span>
        </a>
        
        <button className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {t.links.map((link, index) => {
            const sectionId = link.href.substring(1);
            return (
              <a 
                key={index} 
                href={link.href} 
                className={`nav-link ${activeSection === sectionId ? 'active' : ''}`} 
                onClick={closeMenu}
              >
                {link.name}
              </a>
            );
          })}
          
          <div className="nav-actions">
            <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>

            <a 
              href="#contact" 
              className={`btn btn-primary contact-nav-btn ${activeSection === 'contact' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              {t.contact}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
