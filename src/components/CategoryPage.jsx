import styles from '../styles/CategoryPage.module.css';
import { useCart } from '../context/CartContext';

const CategoryPage = ({ title, products, bannerColor = '#FF6A00' }) => {
  const {
    addToCart,
    addToWishlist,
    removeFromWishlist,
    isInCart,
    isInWishlist
  } = useCart();

  return (
    <div className={styles.page}>
      <div className={styles.banner} style={{ background: bannerColor }}>
        <h2 className={styles.bannerText}>{title}</h2>
      </div>
      <div className={styles.grid}>
        {products.map(product => (
          <div className={styles.card} key={product.id}>
            <img src={product.img} alt={product.name} className={styles.image} />
            <h3>{product.name}</h3>
            <p className={styles.price} style={{ color: '#4CAF50' }}>₹{product.price.toFixed(2)}</p>
            <div className={styles.actions}>
              <button
                className={styles.heart}
                onClick={() =>
                  isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)
                }
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? '#FF6A00' : 'none'} stroke="#FF6A00" strokeWidth="2">
                  <path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 4.1 13.44 5.67C13.97 4.1 15.64 3 17.38 3C20.46 3 22.88 5.42 22.88 8.5C22.88 13.36 15.88 21 12 21Z" />
                </svg>
              </button>
              <button
                className={styles.shop}
                style={{ background: '#FF6A00', color: '#fff' }}
                disabled={isInCart(product.id)}
                onClick={() => addToCart(product)}
              >
                {isInCart(product.id) ? 'Added' : 'Shop Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
