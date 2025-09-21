import '../styles/category-banner.css';
import bgImg from '../pictures/dairy-banner.jpg';
import dairyData from '../data/dairyData.js';
import { useCart } from '../context/CartContext.jsx';
import React from 'react';

const DairyEggs = () => {
    const {
      addToCart,
      addToWishlist,
      removeFromWishlist,
      isInWishlist
    } = useCart();

  return (
    <div>
      <div className="category-banner" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="category-banner-title">Dairy & Eggs</div>
      </div>
      <div style={{marginTop: '32px', position: 'relative'}}>
        <div className="category-grid">
          {dairyData.map(prod => (
            <div className="category-card" key={prod.id}>
              <img src={prod.img} alt={prod.name} className="category-image" />
              <h3>{prod.name}</h3>
              <div className="category-actions">
                <button className="category-heart"    onClick={() =>
                  isInWishlist(prod.id) ? removeFromWishlist(prod.id) : addToWishlist(prod)
                }>
                  {/* Heart SVG */}
                  <svg width="24" height="24" fill={isInWishlist(prod.id) ? '#FF6A00' : 'none'} stroke="#FF6A00" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21s-7-4.35-7-10A5 5 0 0 1 12 6a5 5 0 0 1 7 5c0 5.65-7 10-7 10z"/></svg>
                </button>
                <button className="category-add" onClick={() => addToCart(prod)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default DairyEggs;
