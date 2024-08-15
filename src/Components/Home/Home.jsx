import React, { useContext } from "react";
import styles from "./Home.module.css";
import Slider from "../Slider/Slider";
import MainBodyOfHome from "./MainBodyOfHome/MainBodyOfHome";
import SmallCard from "../Cards/SmallCard/SmallCard"

const Home = () => {

    return (
        <>
            <Slider />
            <SmallCard/>
            <MainBodyOfHome   />
        </>
    );
};

export default Home;