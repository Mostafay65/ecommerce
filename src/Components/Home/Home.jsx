import React, { useContext } from "react";
import styles from "./Home.module.css";
import Slider from "../Slider/Slider";
import MainBodyOfHome from "./MainBodyOfHome/MainBodyOfHome";
import SmallCard from "../Cards/SmallCard/SmallCard";
import OneImgBaner from "./ImgBaners/oneImgBaner";
import ImgBaner from "./ImgBaners/ImgBaner";
const Home = () => {
  return (
    <>
      <Slider />
      <SmallCard />
      <MainBodyOfHome />
      <OneImgBaner/>
      <ImgBaner/>  


    </>
  );
};

export default Home;
