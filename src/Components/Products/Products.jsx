import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import ProductMainCard from "../Cards/ProductMainCard";
import Spinner from "../Helpers/Spinner";
const Products = () => {
    const [Products, SetProducts] = useState([]);
    const [Loading, SetLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            const URL = "https://ecommerce.routemisr.com/api/v1/products";
            const res = await fetch(URL);
            const data = await res.json();
            SetProducts(data["data"]);
            // console.log(Products);
        };
        fetchProducts();
        SetLoading(false);
    }, []);
    return (
        <>
            {Loading ? (
                <Spinner />
            ) : (
                <div className="container" style={{ padding: "100px 0" }}>
                    <div className="row">
                        {console.log(Products[0])}
                        {Products.map((Product) => (
                            <ProductMainCard
                                key={Product.id}
                                Product={Product}
                            ></ProductMainCard>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Products;
