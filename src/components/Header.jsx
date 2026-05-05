import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const { language, toggleLanguage } = useLanguage();

  const translations = {
    en: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      services: 'Services',
      contact: 'Contact',
    },
    ar: {
      about: 'عنّي',
      skills: 'المهارات',
      projects: 'المشاريع',
      experience: 'الخبرة',
      services: 'الخدمات',
      contact: 'اتصل بي',
    }
  };

  const t = translations[language];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="nav-container">
        <a href="#hero" className="logo" onClick={closeMenu}>
          Sara<span>.</span>
        </a>
        
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={closeMenu}>{t.about}</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>{t.skills}</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>{t.projects}</a>
          <a href="#experience" className="nav-link" onClick={closeMenu}>{t.experience}</a>
          <a href="#services" className="nav-link" onClick={closeMenu}>{t.services}</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>{t.contact}</a>
          
          <div className="nav-actions">
            <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};


export default Header;
