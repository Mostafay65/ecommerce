import React, { useState, useEffect } from "react";
import bannar1 from "../../../imgs/theme/Home/banner-7.jpg";
import bannar2 from "../../../imgs/theme/Home/banner-8.jpg";
import styles from "./SellBanner.module.css";

const DealCard = ({
  title,
  subtitle,
  price,
  originalPrice,
  endTime,
  imageUrl,
}) => {
  const [timeLeft, setTimeLeft] = useState(endTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={`${styles.dealCard} col-12 col-md-6 mt-2  `}>
      <img src={imageUrl} alt={title} className={styles.dealImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.price}>
          <span className={styles.currentPrice}>${price}</span>
          <span className={styles.originalPrice}>${originalPrice}</span>
        </div>
        <p className={styles.offerText}>Hurry Up! Offer End In:</p>
        <div className={styles.countdown}>
          <div className={`${styles.timeBlock} me-2`}>
            <span className={`${styles.time}`}>
              {days.toString().padStart(2, "0")}
            </span>
            <span className={`${styles.label} me-2`}>DAYS</span>
          </div> 
          
          <div className={`${styles.timeBlock} me-2`}>
            <span className={styles.time}>
              {hours.toString().padStart(2, "0")}
            </span>
            <span className={styles.label}>HOURS</span>
          </div>
          <div className={`${styles.timeBlock} me-2`}>
            <span className={styles.time}>
              {minutes.toString().padStart(2, "0")}
            </span>
            <span className={styles.label}>MINS</span>
          </div>
          <div className={`${styles.timeBlock} me-2`}>
            <span className={styles.time}>
              {seconds.toString().padStart(2, "0")}
            </span>
            <span className={styles.label}>SEC</span>
          </div>
        </div>
        <button className={styles.shopNow}>
          Shop Now <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
};

export default function SellBanner() {
  return (
    <div className="container">
      <div className="row">
        <DealCard
          title="Deal of the Day"
          subtitle="Summer Collection New Morden Design"
          price={139.0}
          originalPrice={160.99}
          endTime={4 * 24 * 60 * 60 + 6 * 60 * 60 + 48 * 60 + 34}
          imageUrl={bannar1}
        />
        <DealCard
          title="Men Clothing"
          subtitle="Shirt & Bag"
          price={178.0}
          originalPrice={256.99}
          endTime={5 * 24 * 60 * 60 + 6 * 60 * 60 + 48 * 60 + 34}
          imageUrl={bannar2}
        />
      </div>
    </div>
  );
}
