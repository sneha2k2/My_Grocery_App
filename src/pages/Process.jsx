import React from 'react';
import styles from '../styles/InfoPages.module.css';

const steps = [
  'Browse our selection of fresh produce.',
  'Add your favorite items to the cart.',
  'Checkout and schedule your delivery.',
  'Receive your groceries at your doorstep.'
];

const Process = () => (
  <div className={styles.pageContainer}>
    <h2 className={styles.pageTitle}>How Delivery Works</h2>
    <ol className={styles.processList}>
      {steps.map((step, idx) => (
        <li key={idx} className={styles.processStep}>{step}</li>
      ))}
    </ol>
  </div>
);

export default Process;
