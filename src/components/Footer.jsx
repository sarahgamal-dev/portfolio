import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const Footer = () => {

  const { language } = useLanguage();
  const t = content[language].footer;

  return (
    <footer className="footer-v2">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col get-in-touch">
            <h3 className="footer-title">{t.getInTouch}</h3>
            <p className="footer-text">{t.getInTouchDesc1}</p>
            <p className="footer-text">{t.getInTouchDesc2}</p>
            <div className="footer-name-logo">SARA GAMAL</div>
          </div>
          
          <div className="footer-col about-me">
            <h3 className="footer-title">{t.aboutMe}</h3>
            <p className="footer-text">{t.aboutMeDesc}</p>
          </div>
        </div>
        
        <div className="footer-bottom-v2">
          <p className="copyright-text">{t.copyright}</p>
          <button 
            className="back-to-top-v2" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
