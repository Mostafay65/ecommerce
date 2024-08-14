import React from "react";
import styles from "./Products.module.css";
import ProductMainCard from "../Cards/ProductMainCard";

const Products = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <ProductMainCard />
                    <ProductMainCard />
                    <ProductMainCard />
                    <ProductMainCard />
                    <ProductMainCard />
                    <ProductMainCard />
                </div>
            </div>
        </>
    );
};

export default Products;
