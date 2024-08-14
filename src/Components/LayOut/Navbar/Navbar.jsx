import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { TokenContext } from '../../Context/Token';
import logo from '../../../assets/ecocart-high-resolution-logo-transparent (1).png'

const Navbar = () => {
  let {token,setToken} = useContext(TokenContext)
  // console.log(token);
  
  function handleSignOut(){
    localStorage.removeItem('userToken')
    setToken(null)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg py-2 navbar-dark bg-black fixed-top">
        <div className="container ">
          <div className="logo me-3">
          <img src={logo} style={{width : "120px"}} alt="" />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link text-white" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link text-white" aria-current="page">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link text-white" aria-current="page">Cart</Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link text-white" aria-current="page">About Us</Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {token ? (
                  <li className="nav-item">
                  <Link to="/" className="nav-link text-white" aria-current="page" onClick={handleSignOut}>Logout</Link>
                  </li>
              ):<>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-white" aria-current="page">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link text-white" aria-current="page">Register</Link>
              </li>
              </>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
