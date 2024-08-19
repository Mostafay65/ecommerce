import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email address is invalid";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("esrdds");
      await fetch("http://localhost:4000/Messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      toast.success("Your Message is sent succesfully", {
        position: "bottom-right",
        theme: "light",
        autoClose: 3000,
      });
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };
  return (
    <>
      <section className={`${styles.contact_section}`}>
        <div className={`${styles.contact_content}`}>
          <p className={`${styles.contact_subtitle}`}>Get in touch</p>
          <h1 className={`${styles.contact_title}`}>
            Let's Talk About Your Idea
          </h1>
          <p className={`${styles.contact_description}`}>
            Experience seamless shopping with EcoCart, where quality meets
            convenience. From unique products to excellent service, we're
            committed to providing a top-tier online shopping experience for all
            your needs.
          </p>
          <div className={`${styles.contact_buttons}`}>
            <Link
              to={"/about-us"}
              className={`${styles.contact_btn} ${styles.about_us}`}
            >
              About Us
            </Link>
            <Link
              to={"/Products"}
              className={`${styles.contact_btn} ${styles.support_center}`}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>

      <div className={`${styles.formContainer}`}>
        <h2 className={`${styles.formTitle}`}>Drop Us a Line</h2>
        <p className={`${styles.formSubtitle}`}>
          Sent us your message and we will contact you soon.
        </p>
        <form onSubmit={handleSubmit} className={`${styles.form}`}>
          <div className={`${styles.formGroup} d-flex`}>
            <div className="d-flex flex-column w-100 mb-2 pe-md-2" >
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`${styles.formControl}`}
              />
              {errors.firstName && (
                <span className={`${styles.error}`}>{errors.firstName}</span>
              )}
            </div>
            <div className="d-flex flex-column w-100 mb-2 " >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.formControl}`}
              />
              {errors.email && (
                <span className={`${styles.error}`}>{errors.email}</span>
              )}
            </div>
          </div>
          <div className={`${styles.formGroup}`}>
            <div className="d-flex flex-column w-100 mb-2 pe-md-2" >
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className={`${styles.formControl}`}
              />
              {errors.phone && (
                <span className={`${styles.error}`}>{errors.phone}</span>
              )}
            </div>
            <div className="d-flex flex-column w-100 mb-2 " >
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`${styles.formControl}`}
              />
              {errors.subject && (
                <span className={`${styles.error}`}>{errors.subject}</span>
              )}
            </div>
          </div>
          <div className={`${styles.formGroup}`}>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={`${styles.formControl}`}
              rows="4"
            ></textarea>
            {errors.message && (
              <span className={`${styles.error}`}>{errors.message}</span>
            )}
          </div>
          <button type="submit" className={`${styles.submitButton}`}>
            Send message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
