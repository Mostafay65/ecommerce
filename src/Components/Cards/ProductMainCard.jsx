import React from "react";
import styles from "./ProductMainCard.module.css";
import proImage from '../../assets/product.jpg';

const ProductMainCard = () => {
    return (
        <>
            <div className={`${styles.product_card}`}>
                <div className={`${styles.badge}`}>Hot</div>
                <img
                    src={proImage}
                    alt="Colorful Pattern Shirts"
                    className={`${styles.product_image}`}
                />
                <div className={`${styles.product_info}`}>
                    <span className={`${styles.category}`}>Music</span>
                    <h2 className={`${styles.product_name}`}>
                        Colorful Pattern Shirts
                    </h2>
                    <div className={`${styles.rating}`}>
                        <span className={`${styles.stars}`}>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <i className="fa-regular fa-star"></i>
                        </span>
                        <span className={`${styles.percentage}`}>90%</span>
                    </div>
                    <div className={`${styles.price}`}>
                        <span className={`${styles.current_price}`}>
                            $238.85
                        </span>
                        <span className={`${styles.original_price}`}>
                            $245.8
                        </span>
                    </div>
                </div>
                <a href="/cart.html" className={`${styles.add_to_cart}`}>
                    <i className="fa-solid fa-cart-plus"></i>
                </a>
            </div>
        </>
    );
};

export default ProductMainCard;
