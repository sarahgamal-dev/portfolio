import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

import { useTheme } from '../context/ThemeContext';

const Pricing = ({ setPage }) => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = content[language].services;

  const plans = [
    {
      id: "starter",
      tag: "Starter",
      title: "Basic",
      price: "25-50",
      description: "Perfect for small landing pages and simple static websites.",
      features: [
        { text: "Up to 3–6 Pages", included: true },
        { text: "Responsive Design", included: true },
        { text: "Contact Form", included: true },
        { text: "Database Integration", included: false },
        { text: "Admin Dashboard", included: false },
        { text: "API Development", included: false }
      ],
      icon: "🚀",
      btnText: "Get Started"
    },
    {
      id: "popular",
      tag: "Popular",
      title: "Balance",
      price: "60-120",
      description: "Ideal for business websites with database and user management.",
      features: [
        { text: "Up to 10 Pages", included: true },
        { text: "Everything in Basic", included: true },
        { text: "Database Integration", included: true },
        { text: "User Authentication", included: true },
        { text: "API Development", included: true }
      ],
      icon: "⚖️",
      popular: true,
      btnText: "Get Started"
    },
    {
      id: "best",
      tag: "Best Value",
      title: "PRO",
      price: "150-250",
      description: "Full-stack web application with API, dashboard, and payment integration.",
      features: [
        { text: "Everything in Balance", included: true },
        { text: "Unlimited Pages", included: true },
        { text: "RESTful API Development", included: true },
        { text: "Admin Dashboard", included: true },
        { text: "Payment Gateway (Stripe)", included: true }
      ],
      icon: "⚡",
      btnText: "Get Started"
    },
    {
      id: "enterprise",
      tag: "Enterprise",
      title: "Custom",
      price: "Let's Talk",
      description: "Tailored solutions for complex enterprise projects with unique requirements.",
      features: [
        { text: "Everything in PRO", included: true },
        { text: "Custom Architecture", included: true },
        { text: "Redis Caching", included: true },
        { text: "Priority Support", included: true },
        { text: "Dedicated Maintenance", included: true }
      ],
      icon: "⚙️",
      btnText: "Contact Me"
    }
  ];

  return (
    <div className={`pricing-page ${theme} ${language === 'ar' ? 'rtl' : ''}`}>
      <header className="pricing-header-v2">
        <div className="container header-flex">
          <button className="back-btn-styled" onClick={() => setPage('home')}>
             <span className="arrow">{language === 'ar' ? '→' : '←'}</span> {t.cta.backBtn}
          </button>
          
          <div className="pricing-logo-monogram">SG</div>

          <div className="header-actions">
            <button className="theme-toggle" onClick={toggleLanguage}>
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button className="contact-btn-mini" onClick={() => { 
              setPage('home'); 
              setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 150); 
            }}>
              {t.cta.contactBtn}
            </button>
          </div>
        </div>
      </header>


      <div className="container">
        <div className="pricing-hero-text reveal active">
          <span className="pricing-badge">{t.cta.pricingHeader}</span>
          <h1 className="pricing-main-title">{t.cta.pricingTitle}</h1>
          <p className="pricing-main-subtitle">{t.cta.pricingSubtitle}</p>
        </div>

        <div className="pricing-info-banner card reveal active">
          <div className="info-icon">i</div>
          <p>{t.cta.pricingInfo}</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card ${plan.popular ? 'popular' : ''} reveal active`}>
              <div className="plan-tag-label">{plan.tag}</div>
              <div className="plan-icon-small">{plan.icon}</div>
              <h3 className="plan-title">{plan.title}</h3>
              <div className="plan-price-box">
                {plan.price.includes('-') || !isNaN(plan.price.replace(',', '')) ? (
                  <>
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                    <span className="per">/project</span>
                  </>
                ) : (
                  <span className="amount custom-talk">{plan.price}</span>
                )}
              </div>
              <p className="plan-desc">{plan.description}</p>
              
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={feature.included ? 'included' : 'not-included'}>
                    <span className="dot"></span>
                    {feature.text}
                  </li>
                ))}
              </ul>

              <button 
                className={`plan-btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => {
                  setPage('home'); 
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 150);
                }}
              >
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-footer-cta reveal active">
          <h3>{t.cta.notSureTitle}</h3>
          <p>{t.cta.notSureDesc}</p>
          <button className="btn btn-primary" onClick={() => { 
            setPage('home'); 
            setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 150); 
          }}>
            {t.cta.contactBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
