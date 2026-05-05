import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import heroImg from '../assets/images/personal.jpg';

const Hero = () => {
  const { language } = useLanguage();
  const t = content[language].hero;

  const roles = language === 'en' 
    ? ["Frontend React Developer", "Backend Node.js Developer", "Fullstack Developer"]
    : ["مطور واجهات أمامية React", "مطور واجهات خلفية Node.js", "مطور Fullstack"];
    
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    setCurrentRole("");
    setRoleIndex(0);
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[roleIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentRole(fullRole.substring(0, currentRole.length + 1));
        setTypingSpeed(150);

        if (currentRole === fullRole) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1500);
          setTypingSpeed(500); // Small wait before deleting starts
        }
      } else {
        // Deleting
        setCurrentRole(fullRole.substring(0, currentRole.length - 1));
        setTypingSpeed(100);

        if (currentRole === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); // Wait before starting next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="hero">
      {/* Decorative background shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>

      <div className="container hero-grid reveal">
        <div className="hero-text">
          <span className="hero-greeting">{t.greeting}</span>
          <h1 className="hero-name">{t.name}</h1>
          <h2 className="hero-title">
            <span className="typewriter-text">{currentRole}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-desc">{t.statement}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">{t.viewProjects}</a>
            <a href="./src/assets/cv/Sara Gamal - resume.pdf" download className="btn btn-text-icon">
              <span>{t.downloadCV}</span>
              <span className="icon">↓</span>
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src={heroImg} alt={t.name} className="hero-profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
