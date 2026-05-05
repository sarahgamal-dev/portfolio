import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const EducationCertifications = () => {
  const { language } = useLanguage();
  const t = content[language].education;

  return (
    <section id="education" className="edu-section reveal">
      <div className="container">
        <div className="edu-section-header">
          <h2 className="section-title">{t.title}</h2>
        </div>

        <div className="edu-grid">
          {/* Education Column */}
          <div className="edu-col">
            <h3 className="edu-header">
              <span className="edu-header-icon">🎓</span> {t.eduTitle}
            </h3>

            <div className="edu-card-horizontal">
              <div className="edu-card-left">
                <div className="edu-logo-box">
                  <img src={t.logo} alt="University Logo" className="edu-university-logo" />
                </div>
              </div>

              <div className="edu-card-right">
                <div className="edu-main-info">
                  <h4 className="edu-degree-text">{t.degree}</h4>
                  <p className="edu-university-text">{t.university}</p>
                </div>
                
                <p className="edu-project-text-small">
                  {language === 'en' ? 'Graduation Project:' : 'مشروع التخرج:'} {t.gradProject}
                </p>

                <div className="edu-separator"></div>

                <div className="edu-badges-row">
                  <div className="edu-badge-item">
                    <span className="badge-icon">📅</span>
                    <span className="badge-text">{t.years}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="edu-col">
            <h3 className="edu-header">
              <span className="edu-header-icon">✨</span> {t.certTitle}
            </h3>

            <div className="certs-list-container">
              {t.certs.map((cert, idx) => (
                <div className="cert-card-item" key={idx}>
                  <div className="cert-card-icon-box">
                    {/* <span className="cert-emoji-large">{cert.icon}</span> */}
                    <img
                      src={cert.icon}        // مسار الصورة
                      alt={cert.title}       // نص بديل
                      className="cert-card-icon "
                    />
                  </div>
                  <div className="cert-card-info">
                    <h4 className="cert-card-title">{cert.title}</h4>
                    <p className="cert-card-org">{cert.org}</p>
                    {cert.description && <p className="cert-card-desc">{cert.description}</p>}
                  </div>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-card-link"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;

