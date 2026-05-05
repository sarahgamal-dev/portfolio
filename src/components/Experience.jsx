import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const Experience = () => {
  const { language } = useLanguage();
  const t = content[language].experience;

  return (
    <section id="experience" className="reveal section-experience">
      <div className="container">
        <h2 className="section-title">
          <span className="section-title-icon">{t.titleIcon}</span> {t.title}
        </h2>
        <div className="timeline">
          {t.list && t.list.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="experience-header-row">
                  {exp.icon && (
                    <div className="experience-logo-box">
                      <img src={exp.icon} alt={exp.company} className="experience-logo" />
                    </div>
                  )}
                  <div className="experience-main-info">
                    <h3 className="timeline-title">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                  </div>
                </div>
                <span className="timeline-date">{exp.duration}</span>
                <div className="experience-car">
                  <div className="car-item car-challenge">
                    <span className="car-label">{t.labels.challenge}</span>
                    <p className="car-text">{exp.challenge}</p>
                  </div>
                  <div className="car-item car-action">
                    <span className="car-label">{t.labels.action}</span>
                    <p className="car-text">{exp.action}</p>
                  </div>
                  <div className="car-item car-result">
                    <span className="car-label">{t.labels.result}</span>
                    <p className="car-text">{exp.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
