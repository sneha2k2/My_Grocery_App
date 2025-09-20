import React, { useState } from 'react';
import styles from '../styles/InfoPages.module.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission (placeholder)
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.pageContainer}>
      <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
        <span style={{ fontSize: '2.5rem', color: '#f97316' }}>📬</span>
        <h2 className={styles.pageTitle} style={{ marginBottom: '0.5rem' }}>Contact Us</h2>
        <p style={{ color: '#555', fontSize: '1.08rem', margin: '0 auto', maxWidth: 350 }}>
          We'd love to hear from you! Fill out the form below and our team will get back to you soon.
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.contactForm} style={{ maxWidth: 420, margin: '0 auto', boxShadow: '0 2px 12px rgba(249,115,22,0.07)' }}>
        <div>
          <label className={styles.contactLabel} htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} required className={styles.contactInput} placeholder="Your Name" />
        </div>
        <div>
          <label className={styles.contactLabel} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className={styles.contactInput} placeholder="you@email.com" />
        </div>
        <div>
          <label className={styles.contactLabel} htmlFor="message">Message</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} required className={styles.contactTextarea} rows={4} placeholder="Type your message here..." />
        </div>
        <button type="submit" className={styles.contactButton}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
