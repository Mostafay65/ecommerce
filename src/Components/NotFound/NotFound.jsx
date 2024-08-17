import React from "react";
import styles from "./NotFound.module.css";
import pag404 from "../../assets/404.png";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <>
            <div className="container py-5">
                <div className="pt-5 d-flex justify-content-between flex-column align-items-center">
                    <img src={pag404} alt="" srcset="" width={500}  />
                    <h1>Oops! Page not found</h1>
                    <p style={{ maxWidth: "700px", textAlignLast: "center" }}>
                        It's looking like you may have taken a wrong turn. Don't
                        worry... it happens to the best of us. Here's a little
                        tip that might help you get back on track.
                    </p>
                    <Link
                        to="/Home"
                        style={{
                            backgroundColor: "#088178",
                            padding: "10px 40px",
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <i className="fa-solid fa-arrow-left-long pr-2"></i>
                        Back To Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
