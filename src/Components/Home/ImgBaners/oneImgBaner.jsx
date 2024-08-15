import React from "react";
import bannar from "../../../imgs/theme/Home/banner-4.png";
import styles from "./oneImgBaner.module.css"; // Import the CSS module

export default function OneImgBaner() {
  return (
    <>
      <div className={`container ${styles.bannerContainer}`}>
        <img src={bannar} className={`${styles.bannerImage} py-3`} alt="Service Banner" />
        <div className={styles.textOverlay}>
          <h3>Repair Services</h3>
          <h2>We're an Apple Authorised Service Provider</h2>
          <button className={styles.learnMoreButton}>Learn More <span className={styles.mrgnLeftOnHover}>→</span></button>
        </div>
      </div>
    </>
  );
}
