import React from "react";
import styles from "./Home.module.css";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <Products />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Products />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Products />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Products />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Products />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
