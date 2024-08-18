import React, { useEffect, useState } from "react";
import styles from "./AllOrders.module.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Spinner from "../Helpers/Spinner";

export default function AllOrders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const token = localStorage.getItem("userToken");
  const { id } = jwtDecode(token);

  async function GetOrders() {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
      );
      setisLoading(false);
      if (data?.length) {
        setOrders(data);
        console.log(data);
      } else {
        setOrders(null);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setisLoading(true);
    GetOrders();
  }, []);
  return (
    <>
      <title>All Orders</title>
      <section className="py-5">
      {isLoading && <Spinner />}
        <div className="container">
          <h2 className="fw-semibold mb-4 mt-5">MyOrders</h2>

          {orders ? (
            orders.map((order, index) => (
              <div key={index} className={`${styles.orderCard} row p-3 mb-4`}>
                <div className="details d-flex justify-content-between">
                  <div>
                    <h3 className="h6 fw-semibold mb-2">
                      Payment Method: {order.paymentMethodType}
                    </h3>
                    <h3 className="h6 fw-semibold mb-4">
                      Total Order Price:{" "}
                      <span className="text-main">
                        {order.totalOrderPrice} EGP
                      </span>
                    </h3>
                  </div>
                  {order.shippingAddress && (
                    <div>
                      <h3 className="h6 fw-semibold mb-3">
                        Delivered To: {order.shippingAddress.city}
                      </h3>
                    </div>
                  )}
                </div>
                <div className="row g-3 mb-3">
                  {order.cartItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={`${styles.itemCard} col-6 col-sm-4 col-md-3 col-lg-2 mb-3`}
                    >
                      <div className={`${styles.itemInner} p-2 pb-4`}>
                        <img
                          src={item.product.imageCover}
                          className="img-fluid rounded mb-2"
                          alt={item.product.title}
                        />
                        <h4 className="fs-6 text-main mb-1">
                          {item.product.category.name}
                        </h4>
                        <h4 className="fs-6 mb-1">
                          {item.product.title.split(" ").slice(0, 2).join(" ")}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">No orders found.</div>
          )}
        </div>
      </section>
    </>
  );
}
