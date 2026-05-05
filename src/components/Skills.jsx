import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const Skills = () => {
  const { language } = useLanguage();
  const t = content[language].skills;
  const [activeTab, setActiveTab] = useState(t.categories[0].id);

  const activeCategory = t.categories.find(cat => cat.id === activeTab);

  return (
    <section id="skills" className="skills-section reveal">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>

        {/* Tabs Navigation */}
        <div className="skills-tabs">
          {t.categories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span className="tab-icon">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="skills-preview-card">
          <div className="skills-preview-header">
            <div>
              <h3 className="skills-preview-title">{activeCategory.name}</h3>
              <p className="skills-preview-desc">{activeCategory.description}</p>
            </div>
          </div>

          <div className="skills-preview-grid">
            {activeCategory.items.map((skill, idx) => (
              <div className="skills-preview-item" key={idx}>
                <div className="skills-preview-icon">{skill.icon}</div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


