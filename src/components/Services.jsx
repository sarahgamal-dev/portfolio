import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const Services = ({ setPage }) => {
  const { language } = useLanguage();
  const t = content[language].services;

  return (
    <section id="services" className="reveal section-services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">{t.title}</h2>
          {t.subtitle && <p className="section-subtitle-centered">{t.subtitle}</p>}
        </div>
        
        <div className="services-grid">
          {t.list.map((service, i) => (
            <div className="service-card-v2" key={i} style={{ "--accent-color-card": service.color }}>
              <div className="service-icon-wrapper">
                <div className="service-icon-circle">
                  {service.icon}
                </div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title-v2">{service.title}</h3>
                <p className="service-desc-v2">{service.description}</p>
                
                <div className="service-tags">
                  {service.tags && service.tags.map((tag, idx) => (
                    <div className="service-tag" key={idx}>
                      <span className="tag-icon">{tag.icon}</span>
                      <span className="tag-name">{tag.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-card-glow"></div>
            </div>
          ))}
        </div>

        <div className="services-cta-v2 reveal">
          <button onClick={() => setPage('pricing')} className="btn-pricing-v2">
            <span>{t.cta.priceBtn}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};


export default Services;
