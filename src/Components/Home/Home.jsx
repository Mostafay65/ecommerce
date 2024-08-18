import React, { useContext, useEffect } from "react";
import styles from "./Home.module.css";
import Slider from "../Slider/Slider";
import MainBodyOfHome from "./MainBodyOfHome/MainBodyOfHome";
import PopularCategories from "../Cards/PopularCategorieCard/PopularCategories";
import OneImgBaner from "./ImgBaners/oneImgBaner";
import ImgBaner from "./ImgBaners/ImgBaner";
import SellBanner from "./ImgBaners/SellBanner";
import { useNavigate } from "react-router-dom";
import NewArrivalsProduct from "./NewArrivalsProduct/NewArrivalsProduct";

const Home = () => {
  let navigate =  useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('userName') == "admin") navigate('/allusers')
})
  return (
    
    <>
      <Slider />
      <MainBodyOfHome />
      <OneImgBaner/>
      <PopularCategories/>
      <ImgBaner/>  
      <NewArrivalsProduct/>
      <SellBanner/>
      
    </>
  );
};

export default Home;
