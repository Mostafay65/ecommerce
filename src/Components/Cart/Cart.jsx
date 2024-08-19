import React, { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../Context/CartContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Spinner from "../Helpers/Spinner";

export default function Cart() {
  const {
    getCart,
    numOfItems,
    setNumOfItems,
    removeFromCart,
    clearCart,
    updateProductQty,
  } = useContext(CartContext);

  let [cartDetails, setCartDetails] = useState(null);
  let [isLoading, setisLoading] = useState(false);

  function HandleClick(){
    window.scrollTo(0,0);
  }
  async function getCartDetails() {
    let data = await getCart();

    setCartDetails(data);
    setisLoading(false);
  }

  async function removeProductFromCart(id) {
    const data = await removeFromCart(id);
    if (data.status === "success") {
      toast.success("Product Removed From Cart Successfully", {
        theme: "light",
        autoClose: 2500,
      });
      getCartDetails();
    } else {
      toast.error("Something Went Wrong");
    }
  }

  async function clearCarts() {
    const data = await clearCart();
    if (data.message === "success") {
      toast.success("Product Removed From Cart Successfully", {
        theme: "light",
        autoClose: 2500,
      });
      setCartDetails(null);
      getCartDetails();
      setNumOfItems(0);
    } else {
      toast.error("Something Went Wrong");
    }
  }

  async function updateProductQuantity(id, count) {
    const data = await updateProductQty(id, count);
    if (data.status === "success") {
      getCartDetails();
      if (count === 0) {
        removeProductFromCart(id);
      } else {
        toast.success("Product Quantity Updated Successfully", {
          theme: "light",
          autoClose: 2500,
        });
      }
    } else {
      toast.error("Something Went Wrong");
    }
  }

  useEffect(() => {
    setisLoading(true);
    getCartDetails();
  }, []);
  return (
    <section>
      {isLoading && <Spinner />}
      <div className="container py-5 h-100 ">
        {cartDetails ? (
          <section>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div className="card card-registration card-registration-2 shadow mt-5">
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <h1 className="fw-bold mb-0">Shopping Cart</h1>
                            <h6 className="mb-0 text-muted">
                              <span> {numOfItems} </span> items
                            </h6>
                          </div>
                          <hr className="my-4" />

                          {cartDetails.data.products.map((product) => (
                            <div className="row mb-4 d-flex justify-content-between align-items-center container">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={product.product.imageCover}
                                  alt={product.product.title}
                                  className="img-fluid rounded-3"
                                />
                              </div>
                              <div className={`${styles["margin-top-sm"]} col-md-3 col-lg-3 col-xl-3`}>
                                <h6 className="text-muted">
                                  {product.product.category.name}
                                </h6>
                                <h6 className="mb-0">
                                  {product.product.title}
                                </h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button
                                  onClick={() =>
                                    updateProductQuantity(
                                      product.product.id,
                                      product.count - 1
                                    )
                                  }
                                  className="btn btn-link px-2"
                                >
                                  <i className="fas fa-minus text-main"></i>
                                </button>
                                <span className="mx-lg-3 mx-md-0 mx-3 mt-1">
                                  {product.count}
                                </span>
                                <button
                                  onClick={() =>
                                    updateProductQuantity(
                                      product.product.id,
                                      product.count + 1
                                    )
                                  }
                                  className="btn btn-link px-2"
                                >
                                  <i className="fas fa-plus text-main"></i>
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0 ">{product.price} EGP</h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a
                                  onClick={() =>
                                    removeProductFromCart(product.product.id)
                                  }
                                  className="text-muted"
                                >
                                  <i
                                    style={{ cursor: "pointer" }}
                                    className="fas fa-times"
                                  ></i>
                                </a>
                              </div>
                              <hr className="my-4" />
                            </div>
                          ))}

                          <div className="pt-5">
                            <h6 className="mb-0">
                              <Link to={`/Products`} className="text-body">
                                <i className="fas fa-long-arrow-alt-left me-2"></i>
                                Back to shop
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 bg-body-tertiary">
                        <div className="p-5">
                          <h3 className="fw-semibold text-sec mb-4 mt-1 ">Summary</h3>
                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-4">
                            <h5 className="text-uppercase text-sec h6">
                              Items <span> {numOfItems} </span>
                            </h5>
                            <h5 className="h6 text-main ">
                              <span>{cartDetails.data.totalCartPrice} EGP</span>
                            </h5>
                          </div>

                          <h5 className="text-uppercase h6 text-sec mb-3">Shipping</h5>

                          <div className="mb-4 pb-2">
                            <select data-mdb-select-init className="form-select">
                              <option value="1" className="bg-main py-3">Free shipping</option>
                            </select>
                          </div>

                          <h5 className="text-uppercase mb-3 h6 text-sec">Promo code</h5>

                          <div className="mb-5">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Examplea2"
                                className="form-control "
                                placeholder="Enter Code"
                              />
                              
                            </div>
                          </div>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-5">
                            <h5 className="text-uppercase h6 text-sec">Total price</h5>
                            <h5 className="h6 text-main">
                              <span>{cartDetails.data.totalCartPrice} EGP</span>
                            </h5>
                          </div>

                          <div className="d-flex flex-lg-column align-items-center">
                            <div className="w-100">
                              <Link
                                to={`/checkout`}
                                onClick={HandleClick}
                                className="btn btn-main me-1 me-lg-0 w-100 mb-lg-3"
                                data-mdb-ripple-color="dark"
                              >
                                Checkout
                              </Link>
                            </div>
                            <div className="w-100">
                              <button
                                onClick={clearCarts}
                                type="button"
                                className="btn btn-danger ms-1 ms-lg-0 w-100 "
                                data-mdb-ripple-color="dark"
                              >
                                Clear Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <h3 className="my-5">
            There is no Products in your Cart Tap{" "}
            <Link className="text-decoration-none text-main" to={"/"}>
              here
            </Link>{" "}
            to continue shopping
          </h3>
        )}
      </div>
    </section>
  );
}
