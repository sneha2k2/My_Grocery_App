
import React from 'react';
import styles from '../styles/InfoPages.module.css';

const About = () => (
  <div className={styles.pageContainer}>
    <h2 className={styles.pageTitle}>About Us</h2>
    <p className={styles.pageText}>
      Welcome to Grocery Shopping! We are passionate about delivering the freshest produce, dairy, and seafood right to your doorstep. Our mission is to make healthy eating easy, convenient, and affordable for everyone. Thank you for choosing us for your grocery needs!
    </p>
  </div>
);

export default About;
