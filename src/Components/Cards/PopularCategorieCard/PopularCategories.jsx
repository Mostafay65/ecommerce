import React, { useEffect, useState } from "react";
import SCard1 from "./../../../imgs/theme/SmallCard/feature-1.png";
import style from './PopularCategories.module.css'
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'; 

const SmallCard = () => {
  const [categories,setCategories] =useState([]) 

  async function getCategories(){
   let {data} =await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);   
   setCategories(data.data)
  }
  useEffect(()=>{
    getCategories()
  },[])
  return (
    <>
      <div className=" container py-5 ">
        <h4 className="fw-semibold mb-4">Popular <span className="text-main">Categories</span></h4>
       <div className="row">
       <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={6}
          autoplay={{ delay: 800 }} 
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            450: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            750: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {categories?.map((item)=>(
            <SwiperSlide>
            <div className={`px-2 py-2 border rounded-4 text-center ${style.SwiperSlide}`}>
            <img src={item.image} className="w-100 mb-3 rounded-3  " alt="" style={{height:'250px'}} />
            <p className="mb-0 pb-0">{item.name}</p>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
       </div>
      </div>
    </>
  );
};

export default SmallCard;
