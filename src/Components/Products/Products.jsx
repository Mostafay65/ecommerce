import React from "react";
import styles from "./Products.module.css";
import ProductMainCard from "../Cards/ProductMainCard";

const Products = () => {
    return (
        <>
            <div class="container" style={{ padding: "100px 0" }}>
                <div class="row">
                    <ProductMainCard ></ProductMainCard>
                </div>
            </div>
        </>
    );
};

export default Products;
