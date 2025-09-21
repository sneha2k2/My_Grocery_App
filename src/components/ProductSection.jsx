import { useState } from 'react';
import styles from '../styles/ProductSection.module.css';
import fruitsData from '../data/fruitsData';
import dairyData from '../data/dairyData';
import seafoodData from '../data/seafoodData';
import { useCart } from '../context/CartContext.jsx';
import React from 'react';

const allProducts = [
  ...fruitsData,
  ...dairyData,
  ...seafoodData
];

const tabs = [
  { label: 'All', filter: () => allProducts },
  { label: 'Fruits', filter: () => fruitsData },
  { label: 'Dairy', filter: () => dairyData },
  { label: 'Seafood', filter: () => seafoodData },
];

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const {
    addToCart,
    addToWishlist,
    removeFromWishlist,
    isInCart,
    isInWishlist
  } = useCart();

  const products = tabs.find(tab => tab.label === activeTab).filter();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Our Products
        <span className={styles.titleUnderline}></span>
      </h2>
      <div className={styles.tabs}>
        {tabs.map(tab => (
          <button
            key={tab.label}
            className={activeTab === tab.label ? styles.tab + ' ' + styles.active1 : styles.tab}
            onClick={() => setActiveTab(tab.label)}
          >
            <span className={styles.tabIcon}>
              {tab.label === 'All' && (
                <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
              )}
              {tab.label === 'Fruits' && (
                <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 3.87-3.13 7-7 7s-7-3.13-7-7a7 7 0 0 1 7-7z"/></svg>
              )}
              {tab.label === 'Dairy' && (
                <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 19V7a6 6 0 0 1 12 0v12"/></svg>
              )}
              {tab.label === 'Seafood' && (
                <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 12c2-2 6-2 10 0s8 2 10 0"/></svg>
              )}
            </span>
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {products.map(product => (
          <div className={styles.card} key={product.id}>
            <div className={styles.heartWrap}>
              <button 
                className={styles.heart}
                onClick={() =>
                  isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)
                }
              >
                <svg width="20" height="20" fill={isInWishlist(product.id) ? '#FF6A00' : 'none'} stroke="#FF6A00" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21s-7-4.35-7-10A5 5 0 0 1 12 6a5 5 0 0 1 7 5c0 5.65-7 10-7 10z"/></svg>
              </button>
            </div>
            <img src={product.img} alt={product.name} className={styles.image} />
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.price}>₹{product.price.toFixed(2)}</p>
            <button
              className={styles.add}
              style={{ background: '#FF6A00', color: '#fff' }}
              disabled={isInCart(product.id)}
              onClick={() => addToCart(product)}
            >
              {isInCart(product.id) ? 'Added' : '+'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
