import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import useCountUp from '../hooks/useCountUp';

const StatItem = ({ stat, inView }) => {
  const count = useCountUp(stat.value, 2000, inView);
  const suffix = stat.value.toString().match(/[%+]/) ? stat.value.toString().match(/[%+]/)[0] : '';
  
  return (
    <div className="stat-card">
      <span className="stat-icon">{stat.icon}</span>
      <span className="stat-value">
        {count}{suffix}
      </span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
};

const About = () => {
  const { language } = useLanguage();
  const t = content[language].about;
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="about" className="about-section reveal" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{t.title}</h2>

        <div className="about-inner">
          {/* Left: Text content */}
          <div className="about-text-col">
            <h3 className="about-greeting" style={{ whiteSpace: "pre-line" }}>{t.greeting} <span className="wave-emoji">👋</span></h3>
            <p className="about-description" style={{ whiteSpace: "pre-line" }}>{t.description}</p>

            {t.highlights && t.highlights.length > 0 && (
              <ul className="about-highlights">
                {t.highlights.map((item, idx) => (
                  <li key={idx} className="about-highlight-item">
                    <span className="check-icon">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right: Stat cards */}
          <div className="about-stats-grid">
            {t.stats.map((stat, idx) => (
              <StatItem key={idx} stat={stat} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
