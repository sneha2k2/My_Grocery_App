
import React from 'react';
import styles from '../styles/ValueSection.module.css';
import basketImg from '../pictures/basket-full-vegetables.png';

const valueData = [
  {
    title: 'Trust',
    icon: (
      <span className={styles.iconCircle}>
        <svg width="32" height="32" fill="none" stroke="#FF6A00" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21s-7-4.35-7-10A5 5 0 0 1 12 6a5 5 0 0 1 7 5c0 5.65-7 10-7 10z"/></svg>
      </span>
    ),
    desc: 'Trusted by thousands for quality and reliability.'
  },
  {
    title: 'Food Safety',
    icon: (
      <span className={styles.iconCircle}>
        <svg width="32" height="32" fill="none" stroke="#FF6A00" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-0.26-7-5-7-10V6l7-4z"/></svg>
      </span>
    ),
    desc: 'Strict safety standards for every product we deliver.'
  },
  {
    title: 'Always Fresh',
    icon: (
      <span className={styles.iconCircle}>
        <svg width="32" height="32" fill="none" stroke="#FF6A00" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
      </span>
    ),
    desc: 'We deliver only the freshest produce, straight from the farm to your door.'
  },
  {
    title: '100% Organic',
    icon: (
      <span className={styles.iconCircle}>
        <svg width="32" height="32" fill="none" stroke="#FF6A00" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C7 2 2 7 2 12c0 5 5 10 10 10s10-5 10-10c0-5-5-10-10-10z"/></svg>
      </span>
    ),
    desc: 'All our products are certified organic and chemical-free.'
  }
];

const ValueSection = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>
      Our Value
      <span className={styles.underline}></span>
    </h2>
    <div className={styles.valueGrid}>
      <div className={styles.valueRow}>
        <div className={styles.valueItem}>
          {valueData[0].icon}
          <h3 className={styles.valueTitle}>{valueData[0].title}</h3>
          <p className={styles.valueDesc}>{valueData[0].desc}</p>
        </div>
        <div className={styles.valueItem}>
          {valueData[1].icon}
          <h3 className={styles.valueTitle}>{valueData[1].title}</h3>
          <p className={styles.valueDesc}>{valueData[1].desc}</p>
        </div>
      </div>
      <div className={styles.basketWrapper}>
        <img src={basketImg} alt="Basket" className={styles.basketImg} />
      </div>
      <div className={styles.valueRow}>
        <div className={styles.valueItem}>
          {valueData[2].icon}
          <h3 className={styles.valueTitle}>{valueData[2].title}</h3>
          <p className={styles.valueDesc}>{valueData[2].desc}</p>
        </div>
        <div className={styles.valueItem}>
          {valueData[3].icon}
          <h3 className={styles.valueTitle}>{valueData[3].title}</h3>
          <p className={styles.valueDesc}>{valueData[3].desc}</p>
        </div>
      </div>
    </div>
  </section>
);

export default ValueSection;
