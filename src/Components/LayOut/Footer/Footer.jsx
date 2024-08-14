import React from "react";
import styles from "./Footer.module.css"; // Import CSS Module
import AppStore from "../../../imgs/theme/app-store.jpg";
import PlayStore from "../../../imgs/theme/google-play.jpg";
import PaymentMethod from "../../../imgs/theme/payment-method.png";

const Footer = () => {
  return (
    <>
      <footer className="pt-5">
        {/* Newsletter Section */}
        <section className={`${styles.newsletterSection} bg-lamon py-5`}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-md-4 d-flex align-items-center gap-2">
                <i className="fas fa-envelope-open-text fa-2xl"></i>
                <span className="fw-bold">Sign up to Newsletter</span>
              </div>
              <div className="col-12 col-md-4 text-center my-3 my-md-0">
                ...and receive $25 coupon for first shopping.
              </div>
              <div className="col-12 col-md-4">
                <div className={`${styles.inputGroupWrapper} input-group`}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    aria-label="Email for newsletter"
                  />
                  <button className="btn btn-dark" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Footer Content */}
        <div className="container mt-5">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-3 col-lg-4 col-xl-4 mb-4 me-5">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                GATES
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
              <div>
                <h3>follow us</h3>
                <a href="#!" className={`me-4 ${styles.textReset}`}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#!" className={`me-4 ${styles.textReset}`}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#!" className={`me-4 ${styles.textReset}`}>
                  <i className="fab fa-google"></i>
                </a>
                <a href="#!" className={`me-4 ${styles.textReset}`}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#!" className={`me-4 ${styles.textReset}`}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#!" className={`me-4 ${styles.textReset}`}>
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mb-4 trans">
              <h6 className="text-uppercase fw-bold mb-4">About</h6>
              <p>
                <a href="#!" className={styles.textReset}>
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className={styles.textReset}>
                  Delivery Information
                </a>
              </p>
              <p>
                <a href="#!" className={styles.textReset}>
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" className={styles.textReset}>
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a href="#!" className={styles.textReset}>
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#!" className={styles.textReset}>
                  Support Center
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Account Links</h6>
              <p>
                <a href="#!" className={styles.textReset}>
                  My Account
                </a>
              </p>
              <p>
                <a href="#!" className={styles.textReset}>
                  Sign In
                </a>
              </p>
              <p>
                <a href="#!" className={styles.textReset}>
                  View Cart
                </a>
              </p>
              <p>
                <a href="#!" className={styles.textReset}>
                  My Wishlist
                </a>
              </p>
              <p>
                <a href="#!" className={styles.textReset}>
                  Track My Order
                </a>
              </p>
              <p>
                <a href="#!" className={styles.textReset}>
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Install App</h6>
              <p>From App Store or Google Play</p>
              <div className="d-flex gap-2 mb-sm-4 mb-lg-0">
                <a href="#" className="hover-up">
                  <img className="active" src={AppStore} alt="App Store" />
                </a>
                <a href="#" className="hover-up">
                  <img src={PlayStore} alt="Google Play Store" />
                </a>
              </div>
              <p>Secured Payment Gateways</p>
              <a href="#" className="hover-up">
                <img src={PaymentMethod} alt="Payment Methods" />
              </a>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-between pb-3  text-secondary">
              <span>© 2024, GATES - Ecommerce </span>
              <span>Designed by Abdelaziz. All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
