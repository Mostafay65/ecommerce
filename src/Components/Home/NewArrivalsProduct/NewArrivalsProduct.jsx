import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import the necessary CSS
import styles from "./NewArrivalsProduct.module.css";
import NewArrivalsCard from "../../Cards/NewArrivalsCard/NewArrivalsCard";  // Import the new card

export default function NewArrivalsProduct() {
  const [newArrivals, setNewArrivals] = useState([]);

  async function getNewArrivals() {
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products?limit=10&sort=-createdAt"
      );
      setNewArrivals(data.data);
    } catch (error) {
      console.error("Error fetching new arrivals:", error);
    }
  }

  useEffect(() => {
    getNewArrivals();
  }, []);

  return (
    <div className="container py-5">
      <h4 className="fw-semibold mb-4">
        New <span className="text-main">Arrivals</span>
      </h4>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Ensure Autoplay is included here
        spaceBetween={20}
        slidesPerView={6}
        autoplay={{
          delay: 1000, // Set the delay to 1000ms (1 second)
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
        {newArrivals.map((product) => (
          <SwiperSlide key={product.id}>
            <NewArrivalsCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
