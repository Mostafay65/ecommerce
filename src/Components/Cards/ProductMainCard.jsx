import React from "react";
import styles from "./ProductMainCard.module.css";
import Rating from "../Helpers/Rating";

const ProductMainCard = ({ Product }) => {
    return (
        <>
            <div className={`${styles.product_card}`}>
                <div className={`${styles.badge}`}>{Product.brand.slug}</div>
                <img
                    src={Product.imageCover}
                    alt="Colorful Pattern Shirts"
                    className={`${styles.product_image}`}
                />
                <div className={`${styles.product_info}`}>
                    <span className={`${styles.category}`}>
                        {Product.subcategory[0].name}
                    </span>
                    <h2 className={`${styles.product_name}`}>
                        {Product.title}
                    </h2>
                    <div className={`${styles.rating}`}>
                        <span className={`${styles.stars}`}>
                            {<Rating rating={Product.ratingsAverage}></Rating>}
                        </span>
                        <span className={`${styles.percentage}`}>
                            {Math.floor((Product.ratingsAverage / 5) * 100)}%
                        </span>
                    </div>
                    <div className={`${styles.price}`}>
                        <span className={`${styles.current_price}`}>
                            ${Product.price}
                        </span>
                        <span className={`${styles.original_price}`}>
                            ${Product.price + (Product.price * 20) / 100}
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
