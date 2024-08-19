import React, { useContext, useEffect, useState } from "react";
import styles from "./Wishlist.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { CartContext } from "../Context/CartContext";
import Spinner from "../Helpers/Spinner";

const Wishlist = () => {

    const [Products, setProducts] = useState();
    const [loading, setLoading] = useState(false);
    let { getWishlist, removeFromWishlist, addToCart } = useContext(CartContext);

    async function addProductToCart(id) {
        let res = await addToCart(id);
        if (res.status === "success") {
            toast.success(res.message, {
                position: "bottom-right",
                theme: "light",
                autoClose: 2500,
            });
        } else {
            toast.error("Failed");
        }
    }

    async function getWishlistData() {
        setLoading(true);
        let res = await getWishlist();
        
        setProducts(res.data);
        setLoading(false);
    }

    async function removeFromWishlists(id) {
        let data = await removeFromWishlist(id);
        
        if (data.status === "success") {
            toast.success(data.message, {
                position: "bottom-right",
                theme: "light",
                autoClose: 2500,
            });
        } else {
            toast.error("Failed");
        }
        
        getWishlistData();
    }

    useEffect(() => {
        getWishlistData();
    }, []);

    return (
        <>
            {loading ? <Spinner /> : (
                <div className="container py-5">
                    <div className="row py-5">
                        <table className={`${styles.table} tablee`}>
                            <thead>
                                <tr>
                                    <th colSpan={2}>Product</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Products?.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <img
                                                src={product.imageCover}
                                                alt={product.name}
                                                className={styles.productImage}
                                            />
                                        </td>
                                        <td>
                                            <div className={styles.productInfo}>
                                                <h6>{product.title}</h6>
                                                <p>{product.description}</p>
                                            </div>
                                        </td>
                                        <td>${product.price.toFixed(2)}</td>
                                        <td>
                                            <button
                                                className={`${styles.addToCartBtn} btn`}
                                                onClick={() => addProductToCart(product.id)}
                                            >
                                                <i className="fas fa-xl fa-cart-shopping me-2"></i>
                                                Add To Cart
                                            </button>
                                        </td>
                                        <td>
                                            <button className={styles.removeBtn}>
                                                <i className="fa-regular fa-trash-can" onClick={() => removeFromWishlists(product._id)}></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default Wishlist;
