import React from "react";
import styles from "./ProductMainCard.module.css";
import Rating from "../../Helpers/Rating";
import { Link } from "react-router-dom";

const ProductMainCard = ({ Product }) => {
  return (
    <>
      <Link
        to={`/products/${Product.id}`}
        className="p-2 col-6 col-md-4 col-lg-3 text-decoration-none"
      >
        <div
          className={`${styles.product_card} p-3 d-flex flex-column justify-content-between`}
        >
          <div className={`${styles.badge}`}>{Product.brand.slug}</div>
          <div className="">
            <img
              src={Product.imageCover}
              alt="Colorful Pattern Shirts"
              className={`${styles.product_image} `}
            />
            <div className={`${styles.product_info}`}>
              <span className={`${styles.category}`}>
                {Product.subcategory[0].name}
              </span>
              <h2 className={`${styles.product_name}`}>
                {Product.title.length > 25
                  ? Product.title.slice(0, 25) + ".."
                  : Product.title}
              </h2>
            </div>
          </div>
          <div className="">
            <div className={`${styles.rating}`}>
              <span className={`${styles.stars}`}>
                {<Rating rating={Product.ratingsAverage}></Rating>}
              </span>
              <span className={`${styles.percentage}`}>
                {Math.floor((Product.ratingsAverage / 5) * 100)}%
              </span>
            </div>

            <div className="d-flex  justify-content-between">
              <div className={`${styles.price} `}>
                <span className={`${styles.current_price}`}>
                  ${Product.price}
                </span>
                <span className={`${styles.original_price}`}>
                  $
                  {
                    (Product.price + (Product.price * 20) / 100)
                      .toString()
                      .split(".")[0]
                  }
                </span>
              </div>
              <a href="/cart.html" className={`${styles.add_to_cart}`}>
                <i className="fa-solid fa-cart-plus"></i>
                <div className={`${styles.pop} `}>Add To Cart</div>
              </a>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductMainCard;
