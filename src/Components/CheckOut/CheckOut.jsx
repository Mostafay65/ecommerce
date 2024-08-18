import React, { useContext, useState } from "react";
import styles from "./CheckOut.module.css";
import { useFormik } from "formik";
import { CartContext } from "../Context/CartContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function CheckOut() {
  const [isOnlinePayment, setisOnlinePayment] = useState(false);
  const { cartId, setNumOfItems } = useContext(CartContext);
  const navigate = useNavigate();
  const headers = {
    token: localStorage.getItem("userToken"),
  };

  const validationSchema = Yup.object({
    details: Yup.string()
      .min(5, "Give us More Details")
      .required("Details is required"),
    city: Yup.string()
      .min(3, "name is short")
      .max(30, "name is long")
      .required("City is required"),
    phone: Yup.string()
      .matches(
        /^01[0125][0-9]{8}/,
        "Phone Number should start with 01 and contain 9 numbers"
      )
      .required("Phone Number is required"),
    email: Yup.string().email("Email Not Valid").required("Email is Required"),
  });

  const initialValues = {
    details: "",
    phone: "",
    city: "",
    email: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => handlePayment(values),
  });

  async function handlePayment(shippingAddress) {
    try {
      const endPoint = isOnlinePayment
        ? `https://ecommerce.routemisr.com/api/v1/orders//checkout-session/${cartId}?url=http://localhost:3000`
        : `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`;

      const { data } = await axios.post(
        endPoint,
        {
          shippingAddress,
        },
        { headers }
      );
      console.log(data);
      if (data.status == "success") {
        toast.success("Order Placed Successfully", { theme: "light" });
        setNumOfItems(0);
        if (isOnlinePayment) {
          setTimeout(() => (window.location.href = data.session.url), 5000);
        } else {
          setTimeout(() => navigate("/AllOrders"), 5000);
        }
      } else {
        toast.error("Something Went Wrong", {
          theme: "light",
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="py-5 bg-gray">
      <title>Check Out</title>
      <div className={`container p-5 my-5 ${styles.formContainer} bg-white`}>
        <h2>Checkout</h2>

        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={`form-group mb-3 ${styles.formGroup}`}>
            <label htmlFor="phone">Phone</label>
            <input
              className={`form-control bg-gray ${styles.input}`}
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="phone"
            />
            {formik.errors.phone && formik.touched.phone ? (
              <div className="alert alert-danger my-2">
                {formik.errors.phone}
              </div>
            ) : null}
          </div>

          <div className={`form-group mb-3 ${styles.formGroup}`}>
            <label htmlFor="email">Email</label>
            <input
              className={`form-control bg-gray ${styles.input}`}
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="alert alert-danger my-2">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className={`form-group mb-3 ${styles.formGroup}`}>
            <label htmlFor="city">City</label>
            <input
              className={`form-control bg-gray ${styles.input}`}
              type="text"
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.city && formik.touched.city ? (
              <div className="alert alert-danger my-2">
                {formik.errors.city}
              </div>
            ) : null}
          </div>

          <div className={`form-group mb-3 ${styles.formGroup}`}>
            <label htmlFor="details">Details</label>
            <textarea
              className={`form-control bg-gray ${styles.input}`}
              id="details"
              name="details"
              value={formik.values.details}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows="3"
              cols="30"
            ></textarea>
            {formik.errors.details && formik.touched.details ? (
              <div className="alert alert-danger my-2">
                {formik.errors.details}
              </div>
            ) : null}
          </div>


            <button
              className={`btn bg-main w-100 text-white ms-auto d-block payment-btn ${styles.CashBtn}`}
              disabled={!(formik.isValid && formik.dirty)}
            >
              Cash Payment
            </button>
        </form>
      </div>
    </section>
  );
}
