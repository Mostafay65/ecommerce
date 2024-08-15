import React from "react";
import SImg1 from "./../../imgs/theme/Slider/banner-3.png";
import SImg2 from "./../../imgs/theme/Slider/hero4.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'; 

export default function Slider() {
  return (
    <>
      <div className="vh-100 w-100">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 3000 }} 
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
        >
          <SwiperSlide>
          <div className="slide w-100 vh-100 " style={{ backgroundImage: `url(${SImg1})` }}>
            <div class="container position-relative">
               <div class="row">
                <div class="col-md-8 " >
                  <h5 class="fw-semibold fs-4"  >Hot promotions</h5>
                  <h2 class="fw-semibold display-4" >Fshion Trending</h2>
                   <h2 class="display-5 fw-semibold">Great Collection</h2>
                   <p class="w-50" >Save more with copouns & up to 20% off! </p>
                   <button class="btn fw-semibold">Get it Now</button>
                   </div>
               </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide w-100 vh-100 " style={{ backgroundImage: `url(${SImg2})` }}>
            <div class="container position-relative">
               <div class="row">
                <div class="col-md-8 " >
                  <h5 class="fw-semibold fs-4">Trade-in-offer</h5>
                  <h2 class="fw-semibold display-4">Super Value Deals</h2>
                   <h2 class="display-5 fw-semibold">On All Products</h2>
                   <p class="w-50" >Save more with copouns & up to 70% off! </p>
                   <button class="btn fw-semibold">Shop Now</button>
                   </div>
               </div>
                </div>
            </div>
          </SwiperSlide>
        
        </Swiper>
      </div>
    </>
  );
}
