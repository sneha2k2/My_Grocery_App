import styles from '../styles/HeroSection.module.css';
import groceryImg from '../pictures/grocery.png';
import React from 'react';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
          <span className={styles.badge}>Export Best Quality...</span>
          <h1 className={styles.heading}>
            Tasty Organic <span className={styles.orange}>Fruits</span> & <span className={styles.green}>Veggies</span> In Your City
          </h1>
        <p className={styles.subtext}>
          Bred for a high content of beneficial substances. Our products are all fresh and healthy.
        </p>
        <button className={styles.cta}>Shop Now</button>
      </div>
      <div className={styles.right}>
        <img src={groceryImg} alt="Basket of fresh fruits & veggies" className={styles.image} />
      </div>
    </section>
  );
};

export default HeroSection;
