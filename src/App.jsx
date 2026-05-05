import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationCertifications from './components/EducationCertifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import './css/style.css';

import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';

const AppContent = () => {
  const { language } = useLanguage();
  const [page, setPage] = useState('home');
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at top when switching
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [language, page]); // Re-observe when language or page changes

  if (page === 'pricing') {
    return (
      <div className={`app-container ${language === 'ar' ? 'rtl' : ''}`} key="pricing">
        <Pricing setPage={setPage} />
        <Footer />
      </div>
    );
  }

  return (
    <div className={`app-container ${language === 'ar' ? 'rtl' : ''}`} key={language}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <EducationCertifications />
        <Skills />
        <Projects />
        <Experience />
        <Services setPage={setPage} />
        <Testimonials />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
