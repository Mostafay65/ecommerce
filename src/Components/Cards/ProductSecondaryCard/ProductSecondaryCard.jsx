import React from 'react';
import styles from './ProductSecondaryCard.module.css';
import Rating from '../../Helpers/Rating';
import img from "./../../../imgs/theme/Home/product-5-2.jpg";

export default function NewArrival() {
  const product = {
    title: "Lorem ipsum dolor",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4.5,
    isHot: true,
  };

  return (
    <div className={styles.card}>
      {product.isHot && <div className={styles.hotTag}>Hot</div>}
      <div className={styles.imageContainer}>
        <img src={img} alt={product.title} className={styles.image} />
      </div>
      <h2 className={styles.title}>{product.title}</h2>
      <div className={styles.rating}>
        <Rating rating={product.rating} />
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.price}>${product.price.toFixed(2)}</span>
        <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}