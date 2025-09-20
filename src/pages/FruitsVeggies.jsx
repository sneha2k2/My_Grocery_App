
import React, { useState } from 'react';
import '../styles/category-title.css';
import bgImg from '../pictures/fruits-banner.jpg'
import '../styles/category-grid.css';
import productImg1 from '../pictures/strawberry.png';
import productImg2 from '../pictures/cabbage.png';
import productImg3 from '../pictures/pineapple.png';
import productImg4 from '../pictures/broccoli.png';

const products = [
  { id: 1, name: 'Strawberry', img: productImg1 },
  { id: 2, name: 'Cabbage', img: productImg2 },
  { id: 3, name: 'Pineapple', img: productImg3 },
  { id: 4, name: 'Brocolli', img: productImg4 },

];

const FruitsVeggies = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlist = id => {
    setWishlist(wishlist.includes(id) ? wishlist.filter(i => i !== id) : [...wishlist, id]);
  };
  const addToCart = id => {
    if (!cart.includes(id)) setCart([...cart, id]);
  };



  return (
    <div>
  <div className="category-banner" style={{backgroundImage: `url(${bgImg})`}}>
        <div className="category-banner-title">
          Fruits & Veggies
        </div>
      </div>
  <div style={{marginTop: '32px', position: 'relative'}}>
        <div className="category-grid">
          {products.map(prod => (
            <div className="category-card" key={prod.id}>
              <img src={prod.img} alt={prod.name} className="category-image" />
              <h3>{prod.name}</h3>
              <div className="category-actions">
                <button className="category-heart" onClick={() => toggleWishlist(prod.id)}>
                  {/* Heart SVG */}
                  <svg width="24" height="24" fill={wishlist.includes(prod.id) ? '#FF6A00' : 'none'} stroke="#FF6A00" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21s-7-4.35-7-10A5 5 0 0 1 12 6a5 5 0 0 1 7 5c0 5.65-7 10-7 10z"/></svg>
                </button>
                <button className="category-add" onClick={() => addToCart(prod.id)}>
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

export default FruitsVeggies;
