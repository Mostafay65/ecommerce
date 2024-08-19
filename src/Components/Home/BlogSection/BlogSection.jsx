import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./BlogSection.module.css";
import BImg1 from "../../../imgs/theme/Home/blog-1.jpg";
import BImg2 from "../../../imgs/theme/Home/blog-2.jpg";
import BImg3 from "../../../imgs/theme/Home/blog-3.jpg";
import BImg4 from "../../../imgs/theme/Home/blog-4.jpg";
import BImg5 from "../../../imgs/theme/Home/blog-5.jpg";

export default function BlogSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h3 className={styles.sectionTitle}>
          From <span className={styles.highlight}>blog</span>
        </h3>
        <div className={styles.layout}>
          <div className={styles.blogPosts}>
            <article className={styles.blogPost}>
              <img src={BImg2} alt="" className={styles.blogImg} />
              <div className={styles.postContent}>
                <span className={styles.category}>Fashion</span>
                <h4 className={styles.title}>
                  Qualcomm is developing a Nintendo Switch-like console, report
                  says
                </h4>
                <div className={styles.meta}>
                  <span>14 April 2022</span>
                  <span className={styles.dot}>•</span>
                  <span>12M Views</span>
                </div>
                <Link to="/home" className={styles.readMore}>
                  Read More
                </Link>
              </div>
            </article>
            <article className={styles.blogPost}>
              <img src={BImg1} alt="" className={styles.blogImg} />
              <div className={styles.postContent}>
                <span className={styles.category}>Healthy</span>
                <h4 className={styles.title}>
                  Not even the coronavirus can derail 5G's global momentum
                </h4>
                <div className={styles.meta}>
                  <span>14 April 2022</span>
                  <span className={styles.dot}>•</span>
                  <span>12M Views</span>
                </div>
                <Link to="/home" className={styles.readMore}>
                  Read More
                </Link>
              </div>
            </article>
          </div>
          <div className={styles.promos}>
            <div className={`${styles.promo} ${styles.largePromo}`}>
              <img src={BImg3} alt="" className={styles.promoImg} />
              <div className={styles.promoContent}>
                <span>Accessories</span>
                <h4>
                  Save 17% on <br />
                  Autumn Hat
                </h4>
                <Link to="/products" className={styles.shopNow}>
                  Shop Now →
                </Link>
              </div>
            </div>
            <div className={styles.smallPromos}>
              <div className={styles.promo}>
                <img src={BImg4} alt="" className={styles.promoImg} />
                <div className={styles.promoContent}>
                  <span>Big Offer</span>
                  <h4>
                    Save 20% on <br />
                    Women's socks
                  </h4>
                  <Link to="/products" className={styles.shopNow}>
                    Shop Now →
                  </Link>
                </div>
              </div>
              <div className={styles.promo}>
                <img src={BImg5} alt="" className={styles.promoImg} />
                <div className={styles.promoContent}>
                  <span>Smart Offer</span>
                  <h4>
                    Save 20% on <br />
                    Eardrop
                  </h4>
                  <Link to="/products" className={styles.shopNow}>
                    Shop Now →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
