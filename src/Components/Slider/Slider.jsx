import React from "react";
import SImg1 from "./../../imgs/theme/Slider/img1.jpg";
import SImg2 from "./../../imgs/theme/Slider/img2.jpg";
import SImg3 from "./../../imgs/theme/Slider/img3.jpg";

export default function Slider() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={SImg3}
              alt="Third slide"
              style={{ height: "700px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={SImg1}
              alt="First slide"
              style={{ height: "700px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={SImg2}
              alt="Second slide"
              style={{ height: "700px", objectFit: "cover" }}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
