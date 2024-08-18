import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import necessary CSS
import styles from "./BrandsSwiper.module.css"; // Ensure correct path

export default function BrandSwiper() {
  const [brands, setBrands] = useState([]);

  async function getBrands() {
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/brands"
      );
      setBrands(data.data);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  }

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div className="container py-5">
      <h4 className="fw-semibold mb-4">
        Our <span className="text-main">Brands</span>
      </h4>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={6}
        autoplay={{
          delay: 2000, 
        }}
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
        {brands.map((brand) => (
          <SwiperSlide key={brand._id}>
            <img
              src={brand.image}
              alt={brand.name}
              className={styles.brandImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
