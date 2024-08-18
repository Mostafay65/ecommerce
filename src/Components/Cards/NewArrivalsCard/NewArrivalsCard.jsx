import React from "react";
import styles from "./NewArrivalsCard.module.css";
import { Link } from "react-router-dom";

export default function NewArrivalsCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className={`text-decoration-none`}>
      <div className={`p-3 border rounded-4 ${styles.card}`}>
        <div className={`text-center mb-2 ${styles.imageContainer}`}>
          <img 
            src={product.imageCover} 
            alt={product.title} 
            className={`w-100 ${styles.productImage}`} 
          />
        </div>
        <h6 className={`${styles.productTitle} mb-1`}>
          {product.title.length > 23 ? `${product.title.slice(0, 15)}...` : product.title}
        </h6>
        <p className={`text-main fw-bold mb-0 ${styles.productPrice}`}>
          {product.price} EGP
        </p>
      </div>
    </Link>
  );
}
