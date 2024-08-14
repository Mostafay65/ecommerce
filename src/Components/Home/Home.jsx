import React from "react";
import styles from "./Home.module.css";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";
import MainBodyOfHome from "../MainBodyOfHome/MainBodyOfHome";

const Home = () => {
  return (
    <>
      <Slider />
      <MainBodyOfHome />
    </>
  );
};

export default Home;
