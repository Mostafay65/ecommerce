import React from 'react';
import styles from './OurTeam.module.css';
import team1 from '../../assets/About/avatar-1.jpg';
import team2 from '../../assets/About/avatar-2.jpg';
import team3 from '../../assets/About/avatar-3.jpg';
import team4 from '../../assets/About/avatar-4.jpg';
import team5 from '../../assets/About/avatar-5.jpg';

const OurTeam = () => {
  let team = [
    {
      name: "Isabella García",
    job: "Loyal Customer",
      img: team1
    },
    {
      name: "Sofía Martínez",
      job: "Loyal Customer",
      img: team2
    },
    {
      name: "Camila Rodríguez",
      job: "Frequent Buyer",
      img: team3
    },
    {
      name: "Valentina López",
      job: "Content Client",
      img: team4
    },
    {
      name: "Lucía Hernández",
      job: "Happy Shopper",
      img: team5
    }
  ];
  
  
  return (
    <>
      <div className="customers">
        <div className="container py-5">
          <div
            id="carouselExampleIndicatorss"
            className="carousel slide mx-auto text-center position-relative"
            style={{ width: '60%' }}
          >
            <div className="carousel-inner">
              <div className="title-customers">
                <h6
                  className="text-uppercase"
                  style={{ fontSize: '14px', letterSpacing: '1px' }}
                >
                  Happy Customers
                </h6>
              </div>
              {team.map((member, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <div className="customer-image rounded-circle">
                    <img
                      src={member.img}
                      className="rounded-circle"
                      alt={member.name}
                    />
                  </div>
                  <div className="customer py-5 bg-white px-md-5">
                    <h4 className="pt-5 text-sec">{member.name}</h4>
                    <span
                      className="text-uppercase fw-semibold"
                      style={{ fontSize: '12px', color: '#777777' }}
                    >
                      {member.job}
                    </span>
                    <p className="px-5 lead fs-6 text-secondary pt-4">
                      Consectetur adipisicing elit. Perspiciatis aperiam quaerat iure
                      veritatis fugit debitis, repellat aut accusantium culpa ipsum
                      ex ipsa blanditiis recusandae, sit similique, eius assumenda
                      porro pariatur.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators customers-indicators position-static">
              {team.map((_, index) => (
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicatorss"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-current={index === 0 ? 'true' : undefined}
                  aria-label={`Slide ${index + 1}`}
                  key={index}
                ></button>
              ))}
            </div>

            <button
              className="carousel-control-prev cur-control cur-control-prev position-absolute"
              type="button"
              data-bs-target="#carouselExampleIndicatorss"
              data-bs-slide="prev"
            >
              <span className="cur-icon cur-icon-prev">
                <i className="fa-solid fa-arrow-left fa-xl"></i>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next cur-control cur-control-next position-absolute"
              type="button"
              data-bs-target="#carouselExampleIndicatorss"
              data-bs-slide="next"
            >
              <span className="cur-icon cur-icon-next">
                <i className="fa-solid fa-arrow-right fa-xl"></i>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
