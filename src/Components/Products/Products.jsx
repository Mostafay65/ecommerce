import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import ProductMainCard from "../Cards/ProductMainCard/ProductMainCard";
import Spinner from "../Helpers/Spinner";
import { Link } from "react-router-dom";
const Products = () => {
    const [Products, SetProducts] = useState([]);
    const [Loading, SetLoading] = useState(true);

    const fetchProducts = async () => {
        const URL = "https://ecommerce.routemisr.com/api/v1/products";
        const res = await fetch(URL);
        const data = await res.json();
        SetProducts(data["data"]);
        SetLoading(false);
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <>
            <div id="products" className="products py-5">
                {Loading ? (
                    <Spinner />
                ) : (
                    <div className="container py-5  ">
                        <div className="row ">
                            {Products.map((Product) => (
                                <ProductMainCard
                                    key={Product.id}
                                    Product={Product}
                                ></ProductMainCard>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Products;
