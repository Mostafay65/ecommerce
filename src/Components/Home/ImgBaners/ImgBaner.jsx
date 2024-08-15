import React from "react";
import banner1 from "../../../imgs/theme/Home/banner-1.png";
import banner2 from "../../../imgs/theme/Home/banner-2.png";
import banner3 from "../../../imgs/theme/Home/banner-3.png";
import styles from "./ImgBaner.module.css"; // Create this CSS module for styling

const banners = [
  {
    img: banner1,
    title: "Smart Offer",
    subtitle: "Save 20% on",
    description: "Woman Bag",
    buttonText: "Shop Now",
  },
  {
    img: banner2,
    title: "Sale off",
    subtitle: "Great Summer",
    description: "Collection",
    buttonText: "Shop Now",
  },
  {
    img: banner3,
    title: "New Arrivals",
    subtitle: "Shop Today’s",
    description: "Deals & Offers",
    buttonText: "Shop Now",
  },
];

const ImgBaner = () => {
  return (
    <div className={`container ${styles.bannersContainer} `}>
      <div className="row">
        {banners.map((banner, index) => (
          <div key={index} className={`col-md-4 ${styles.banner}`}>
            <img
              src={banner.img}
              alt={banner.description}
              className={styles.bannerImage}
            />
            <div className={styles.textOverlay}>
              <h3>{banner.title}</h3>
              <h2>
                {banner.subtitle}
                <br />
                {banner.description}
              </h2>
              <div className="textOverlay">
                <a href="#" className={styles.learnMoreButton}>
                  Shop Now <span className={styles.mrgnLeftOnHover}>→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgBaner;
