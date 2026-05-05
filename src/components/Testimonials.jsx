import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const Testimonials = () => {
  const { language } = useLanguage();
  const t = content[language].testimonials;

  return (
    <section id="testimonials" className="reveal section-testimonials">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        {t.list.length > 0 ? (
          <div className="testimonials-grid">
            {t.list.map((item, i) => (
              <div className="testimonial-card" key={i}>
                <div className="quote-icon">“</div>
                <p className="feedback">{item.feedback}</p>
                <div className="client-info">
                  <h4 className="client-name">{item.name}</h4>
                  <p className="client-role">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="coming-soon">
            <p>{t.comingSoon}</p>
          </div>
        )}
      </div>

    </section>
  );
};

export default Testimonials;
