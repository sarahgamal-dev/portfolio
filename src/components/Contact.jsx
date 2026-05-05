import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const Contact = () => {
  const { language } = useLanguage();
  const t = content[language].contact;

  return (
    <section id="contact" className="reveal section-contact">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>{language === 'en' ? "Let's Build Something Great Together" : "لنقم ببناء شيء رائع معاً"}</h3>
            <p>{t.info}</p>
            
            <div className="contact-direct-links">
              <a href={`mailto:${t.emailAddress}`} className="contact-method">
                <span className="icon">📧</span> {t.emailAddress}
              </a>
              <a href="tel:+201148318711" className="contact-method">
                <span className="icon">📞</span> 01148318711
              </a>
              <a href="https://wa.me/201148318711" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="icon">💬</span> WhatsApp
              </a>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">💼</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">🐙</a>
            </div>
          </div>
          
          <form action={`https://formsubmit.co/${t.emailAddress}`} method="POST" className="contact-form">
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Message From Portfolio! 🚀" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="form-group">
              <label>{t.name}</label>
              <input type="text" name="name" className="form-control" placeholder={language === 'en' ? "Enter your name" : "أدخل اسمك"} required />
            </div>
            <div className="form-group">
              <label>{t.email}</label>
              <input type="email" name="email" className="form-control" placeholder={language === 'en' ? "Enter your email" : "أدخل بريدك الإلكتروني"} required />
            </div>
            <div className="form-group">
              <label>{t.message}</label>
              <textarea name="message" className="form-control" placeholder={language === 'en' ? "Tell me about your project" : "أخبرني عن مشروعك"} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">{t.send}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
