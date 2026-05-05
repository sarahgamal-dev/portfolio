import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const Projects = () => {
  const { language } = useLanguage();
  const t = content[language].projects;
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const openModal = (proj) => setSelectedProject(proj);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="reveal section-projects">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>

        <div className="projects-grid">
          {t.list.map((proj, i) => (
            <div className="project-card" key={i} onClick={() => openModal(proj)}>
              {/* Image */}
              <div className="project-image">
                <img src={proj.image} alt={proj.title} />
              </div>

              {/* Card Info */}
              <div className="project-content">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-role">{proj.role}</p>

                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <span>▶</span> {t.labels.live}
                  </a>
                  <button className="btn btn-outline" onClick={() => openModal(proj)}>
                    <span>🔍</span> {t.labels.viewDetails}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* External Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">✕</button>

            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <span className="badge badge-source">{selectedProject.source}</span>
            </div>

            <div className="modal-sections">
              <div className="modal-top-grid">
                <div className="modal-section challenge-section">
                  <h4>🎯 {t.labels.challenge}</h4>
                  <p>{selectedProject.challenge}</p>
                </div>
                <div className="modal-section action-section">
                  <h4>⚡ {t.labels.action}</h4>
                  <p>{selectedProject.action}</p>
                </div>
              </div>

              <div className="modal-section result-section">
                <h4>✅ {t.labels.result}</h4>
                <p>{selectedProject.result}</p>
              </div>

              <div className="modal-bottom-grid">
                <div className="modal-section features-section">
                  <h4>🚀 {t.labels.features}</h4>
                  <ul className="modal-features-list">
                    {selectedProject.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-section tech-section">
                  <h4>🛠 Technologies</h4>
                  <div className="modal-tech">
                    {selectedProject.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer-links">
              <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary full-width">
                ▶ {t.labels.live}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
