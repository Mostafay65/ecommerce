import React from "react";
import styles from "./ProductMainCardHome.module.css";

const ProductMainCardHome = ({ product }) => {
  return (
    <div className={`${styles.product_card}`}>
      <div className={`${styles.badge}`}>Hot</div>
      <img
        src={product.imageCover}
        alt={product.title}
        className={`${styles.product_image}`}
      />
      <div className={`${styles.product_info}`}>
        <span className={`${styles.category}`}>{product.category.name}</span>
        <h2 className={`${styles.product_name}`}>{product.title}</h2>
        <div className={`${styles.rating}`}>
          <span className={`${styles.stars}`}>
            {/* Display stars based on ratingsAverage */}
            {Array.from({ length: Math.floor(product.ratingsAverage) }, (_, index) => (
              <i key={index} className="fa-solid fa-star"></i>
            ))}
            {/* Display half-star if needed */}
            {product.ratingsAverage % 1 !== 0 && <i className="fa-solid fa-star-half-stroke"></i>}
            {/* Display empty stars to make total 5 */}
            {Array.from({ length: 5 - Math.ceil(product.ratingsAverage) }, (_, index) => (
              <i key={index} className="fa-regular fa-star"></i>
            ))}
          </span>
          <span className={`${styles.percentage}`}>{product.ratingsAverage * 20}%</span>
        </div>
        <div className={`${styles.price}`}>
          <span className={`${styles.current_price}`}>${product.price}</span>
          <span className={`${styles.original_price}`}>${(product.price * 1.1).toFixed(2)}</span>
        </div>
      </div>
      <a href="/cart.html" className={`${styles.add_to_cart}`}>
        <i className="fa-solid fa-cart-plus"></i>
      </a>
    </div>
  );
};

export default ProductMainCardHome;
