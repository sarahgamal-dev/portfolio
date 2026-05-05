import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import useCountUp from '../hooks/useCountUp';

const AchievementItem = ({ item, inView }) => {
  const count = useCountUp(item.title, 2000, inView);
  const suffix = item.title.match(/[%+]/) ? item.title.match(/[%+]/)[0] : '';
  const textPart = item.title.replace(/[0-9%+]/g, '').trim();

  return (
    <div className="achievement-card">
      <div className="achievement-icon">🏆</div>
      <h3 className="achievement-title">
        {count}{suffix} {textPart}
      </h3>
      <p className="achievement-desc">{item.description}</p>
    </div>
  );
};

const Achievements = () => {
  const { language } = useLanguage();
  const t = content[language].achievements;
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
    <section id="achievements" className="reveal section-achievements" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <div className="achievements-grid">
          {t.list.map((item, i) => (
            <AchievementItem key={i} item={item} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
