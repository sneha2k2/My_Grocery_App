import React from 'react';
import styles from '../styles/Navbar.module.css';

const SearchBar = () => {
  return (
    <form className={styles.searchBar}>
      <input type="text" placeholder="Search..." className={styles.searchInput} />
      <button type="submit" className={styles.searchButton}>
        {/* Search Icon SVG */}
        <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
    </form>
  );
};

export default SearchBar;
