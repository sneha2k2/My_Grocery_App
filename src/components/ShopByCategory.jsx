import React from 'react';
import styles from '../styles/ShopByCategory.module.css';
import fruitsImg from '../pictures/fruits-and-veggies.png';
import dairyImg from '../pictures/dairy-and-eggs.png';
import meatImg from '../pictures/meat-and-seafood.png';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    title: 'Fruits & Veggies',
    img: fruitsImg,
    desc: 'Fresh produce delivered to your door.',
    link: '/fruits-veggies',
    color: '#FF6A00',
  },
  {
    title: 'Dairy & Eggs',
    img: dairyImg,
    desc: 'Milk, cheese, and eggs from trusted farms.',
    link: '/dairy-eggs',
    color: '#FF6A00',
  },
  {
    title: 'Meat & Seafood',
    img: meatImg,
    desc: 'Quality meat and seafood, always fresh.',
    link: '/meat-seafood',
    color: '#FF6A00',
  },
];

const ShopByCategory = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Shop by Category
        <span className={styles.titleUnderline}></span>
      </h2>
      <div className={styles.grid}>
        {categories.map((cat, idx) => (
          <div className={styles.card} key={cat.title} style={{ borderColor: cat.color }}>
            <img src={cat.img} alt={cat.title} className={styles.image} />
            <h3 className={styles.cardTitle}>{cat.title}</h3>
            <p className={styles.cardDesc}>{cat.desc}</p>
            <button className={styles.seeAll} style={{ backgroundColor: cat.color }} onClick={() => navigate(cat.link)}>
              See All
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
