
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import SearchBar from './SearchBar';
import { useCart } from '../context/CartContext.jsx';

const Navbar = () => {
  const location = useLocation();
  const { cart, wishlist } = useCart();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
         <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
             <div className={styles.logo1}>
               Gr<span className={styles.orange}>O</span>cify
              </div>
         </Link>
       </div>

      <ul className={styles.menu}>
        <li><Link to="/" className={location.pathname === '/' ? styles.active : ''}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>About Us</Link></li>
        <li><Link to="/process" className={location.pathname === '/process' ? styles.active : ''}>Process</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>Contact Us</Link></li>
      </ul>
      <SearchBar />
      <div className={styles.icons}>
        <span className={styles.icon} title="Wishlist">
          {/* Heart Icon SVG */}
          <svg width="24" height="24" fill="none" stroke="#f97316" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21s-7-4.35-7-10A5 5 0 0 1 12 6a5 5 0 0 1 7 5c0 5.65-7 10-7 10z"/></svg>
          {wishlist.length > 0 && <span className={styles.count}>{wishlist.length}</span>}
        </span>
        <span className={styles.icon} title="Cart">
          {/* Shopping Bag Icon SVG */}
          <svg width="24" height="24" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2l1.5 2h9L18 2"/><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          {cart.length > 0 && <span className={styles.count}>{cart.length}</span>}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
