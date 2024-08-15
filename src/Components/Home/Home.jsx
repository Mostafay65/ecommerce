import React, { useContext } from "react";
import styles from "./Home.module.css";
import Slider from "../Slider/Slider";
import MainBodyOfHome from "./MainBodyOfHome/MainBodyOfHome";
import PopularCategories from "../Cards/SmallCard/PopularCategories";
import OneImgBaner from "./ImgBaners/oneImgBaner";
import ImgBaner from "./ImgBaners/ImgBaner";
const Home = () => {
  return (
    <>
      <Slider />
      <MainBodyOfHome />
      <OneImgBaner/>
      <PopularCategories/>
      <ImgBaner/>  


    </>
  );
};

export default Home;
