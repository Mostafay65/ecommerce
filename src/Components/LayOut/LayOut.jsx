import React from 'react'
import styles from './LayOut.module.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'


const LayOut = () => {

  return <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
}

export default LayOut
