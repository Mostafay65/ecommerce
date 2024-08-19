import React, { useEffect, useState } from "react";
import styles from "./Wishlist.module.css";
import { FaTrashAlt } from "react-icons/fa";
import img from "../../assets/product.jpg";
import axios from "axios";
import { toast } from "react-toastify";

const Wishlist = () => {

    const [Products, SetProducts] = useState();
    async function GetWishList(){
        const headers ={
            token: localStorage.getItem("userToken"),
        }
        try {
            const response = await axios.get(
                "https://ecommerce.routemisr.com/api/v1/wishlist",
                {
                    headers,
                }
            );
            debugger;
            if (response.status === 200) {
                toast.success("Product Added To WishList Successfully");
            } else {
                toast.error("Failed to add product to wishlist");
            }
        } catch (e) {
            toast.error(e);
        }
    }

    useEffect(GetWishList(),[]);
    return (
        <div className="container py-5">
            <div className="row py-5">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th colSpan={2}>Product</th>
                            <th>Price</th>
                            <th>Stock Status</th>
                            <th>Action</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>

                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className={styles.productImage}
                                    />
                                </td>
                                <td>
                                    <div className={styles.productInfo}>
                                        <h6>{product.name}</h6>
                                        <p>{product.description}</p>
                                    </div>
                                </td>
                                <td>${product.price.toFixed(2)}</td>
                                <td>
                                    {product.inStock ? (
                                        <span className="text-main fw-bold">
                                            In Stock
                                        </span>
                                    ) : (
                                        <span className="fw-bold text-danger">
                                            Out of stock
                                        </span>
                                    )}
                                </td>
                                <td>
                                    {product.inStock ? (
                                        <button
                                            className={`${styles.addToCartBtn} btn `}
                                        >
                                            <i className="fas fa-bag-shopping pr-2"></i>
                                            Add to cart
                                        </button>
                                    ) : (
                                        <button
                                            className={`${styles.contactUsBtn} btn`}
                                        >
                                            <i className="fas fa-phone pr-2"></i>
                                            Contact Us
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button className={styles.removeBtn}>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wishlist;
