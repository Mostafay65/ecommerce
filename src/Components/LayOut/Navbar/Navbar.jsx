import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TokenContext } from "../../Context/Token";
import logo from "../../../assets/ecocart-high-resolution-logo-transparent.png";
import styles from "./Navbar.module.css";
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {
  let { token, setToken } = useContext(TokenContext);
  const [scrolledDown, setScrolledDown] = useState(false);
  const location = useLocation();
  let {numOfItems,getCart} =useContext(CartContext)

  function handleSignOut() {
    localStorage.removeItem("userToken");
    setToken(null);
  }
  async function getUserCart() {
   if(token) await getCart()
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);

  useEffect(()=>{
    getUserCart()
  },[token])

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-white fixed-top ${styles.nav} ${
          scrolledDown ? styles.scrolled : styles.notScrolled
        }`}
      >
        <div className="container px-2">
          <div className="logo me-3">
            <img src={logo} style={{ width: "120px" }} alt="Logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `${
                      isActive || location.pathname === "/" ? "text-main" : ""
                    } nav-link`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `${isActive ? "text-main" : ""} nav-link`
                  }
                  aria-current="page"
                >
                  Products
                </NavLink>
              </li>
              {token ? (
                <li className="nav-item">
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      `${isActive ? "text-main" : ""} nav-link `
                    }
                    aria-current="page"
                  >
                    <p className={`p-0 m-0 ${styles.cart}`}>
                      Cart
                      <span className={`${styles.cartNum}`}>{numOfItems}</span>
                    </p>
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item">
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `${isActive ? "text-main" : ""} nav-link`
                  }
                  aria-current="page"
                >
                  About Us
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {token ? (
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={`nav-link text-main ${styles.logoutIcon} `}
                    aria-current="page"
                    onClick={handleSignOut}
                  >
                    Log Out
                    <i
                      className={`fa-solid ms-2 text-main fa-right-from-bracket fa-xl ${styles.logoutIcon}`}
                    ></i>
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        `${isActive ? "text-main" : ""} nav-link`
                      }
                      aria-current="page"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        `${isActive ? "text-main" : ""} nav-link`
                      }
                      aria-current="page"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
