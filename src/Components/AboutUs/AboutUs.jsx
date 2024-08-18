import React from 'react'
import styles from './AboutUs.module.css'
import aboutImage from '../../assets/About/about-1.png'
import team1 from '../../assets/About/avatar-1.jpg'
import team2 from '../../assets/About/avatar-2.jpg'
import team3 from '../../assets/About/avatar-3.jpg'
import team4 from '../../assets/About/avatar-4.jpg'
import team5 from '../../assets/About/avatar-5.jpg'
import comp1 from '../../assets/About/company-1.jpg'
import comp2 from '../../assets/About/company-2.jpg'
import comp3 from '../../assets/About/company-3.jpg'
import BrandSwiper from '../Home/BrandsSwiper/BrandsSwiper'
import OurTeam from '../OurTeam/OurTeam'



const AboutUs = () => {
  let ourTeam = [
    {
      name:"Patric Adams",
      role:"CEO & Co-Founder",
      image: team1
    },
    {
      name:"Patric Adams",
      role:"CEO & Co-Founder",
      image: team2
    },
    {
      name:"Patric Adams",
      role:"CEO & Co-Founder",
      image: team3
    },
    {
      name:"Patric Adams",
      role:"CEO & Co-Founder",
      image: team4
    },
    {
      name:"Patric Adams",
      role:"CEO & Co-Founder",
      image: team4
    },

  ]
  let facts = [
    {
      name:"J. Bezos",
      image: team1
    },
    {
      name:"B.Gates",
      image: team2
    },
    {
      name:"B. Meyers",
      image: team3
    },
    {
      name:"J. Bezos",
      image: team4
    },
    {
      name:"B.Gates",
      image: team5
    },
    {
      name:"B. Meyers",
      image: team1
    },

  ]
  let brenches = [
    {
      city:"New York, USA",
      address:"27 Division St, New York NY 10002, USA",
      image: comp1
    },
    {
      city:"Paris, France",
      address:"22 Rue des Carmes 75005 Paris",
      image: comp2
    },
    {
      city:"Jakarta, Indonesia",
      address:"2476 Raya Yogyakarta, 89090 Indonesia",
      image: comp3
    },
  ]
  return <>
  <section id='about' className="about bg-gray py-5">
    <div className="container py-5">
      <div className="row our-company py-5">
        <div className="col-md-6">
          <h4 className='text-main h5'>Our Company</h4>
          <h2>We are Building The Destination For Getting Things Done</h2>
          <p className='text-sec'>Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices purus dolor erat bibendum sapien metus.
              Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices purus dolor erat bibendum sapien metus. Sit mi, pharetra, morbi arcu id. Pellentesque dapibus nibh augue senectus.</p>
        </div>
        <div className="col-md-6">
          <img src={aboutImage} className='img-fluid' alt="" />
        </div>
      </div>
      <div className="row justify-content-center ">
      <div className="col-md-6 mb-md-4">
        <h4 className='h5 text-main'>Our Team</h4>
        <h2>Top team of experts</h2>
        <p className='text-sec'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione optio perferendis sequi mollitia quis autem ea cupiditate possimus!</p>
      </div>
      <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-md-end align-items-md-center">
        <button className={`${styles.btnMain} py-2 rounded-2 px-3 text-xsm fw-semibold text-main text-uppercase`}>All Members</button>
      </div>
      <div className="col-12">
        <div className="row justify-content-center">
          {ourTeam.map((member, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-6 mb-4 rounded-3 text-center">
              <img src={member.image} className={`${styles.teamImg} img-fluid rounded-3 mb-2`} alt={member.name} />
              <h5 className='text-sec'>{member.name}</h5>
              <p className='text-main'>{member.role}</p>
              <div className="icons d-flex justify-content-center text-sm gap-3">
                <i className='fab fa-facebook-f text-secondary'></i>
                <i className='fab fa-twitter text-secondary'></i>
                <i className='fab fa-instagram text-secondary'></i>
                <i className='fab fa-pinterest-p text-secondary'></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      <hr  />
      <div className="row brenches text-center">
       <div className="branches-title py-3">
         <h5 className='text-main text-uppercase'>Evara Coporation</h5>
        <h2 className='text-sec'>Our main branches
        around the world</h2>
        <p className='text-sec text-sm'>At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium. ebitis <br /> nesciunt voluptatum dicta reprehenderit accusamus</p>
       </div>
        {brenches.map((branch)=>(
          <div className="col-md-4  mb-4 rounded-3 text-center ">
          <img src={branch.image} className={`${styles.teamImg} img-fluid rounded-3 mb-2`} alt="" />
          <h5 className='text-sec'>{branch.city}</h5>
          <p className=' text-main'>{branch.address}</p>
          <div className="icons d-flex justify-content-center text-sm gap-3">
            <i className='fab fa-facebook-f text-secondary'></i>
            <i className='fab fa-twitter text-secondary'></i>
            <i className='fab fa-instagram text-secondary'></i>
            <i className='fab fa-pinterest-p text-secondary'></i>
          </div>
        </div>
        ))}
      </div>
      <hr />
      <div className="row facts">
      <div className="facts-title text-center py-3">
         <h5 className='text-main text-uppercase'>some facts</h5>
        <h2 className='text-sec'>Take a look what
        our clients say about us</h2>
        <p className='text-sec text-sm'>At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium. ebitis <br /> nesciunt voluptatum dicta reprehenderit accusamus</p>
       </div>
       {facts.map((fact)=>(
        <div className={`col-md-4  `}>
        <div className={`row bg-white mx-1 my-2 py-3 rounded-3 ${styles.factContainer}`}>
          <div className="col-3">
            <img src={fact.image} className='img-fluid rounded-3' alt="" />
          </div>
          <div className="col-9">
            <h6>{fact.name}</h6>
            <p className='text-secondary mb-1 text-sm'>Adobe Jsc</p>
            <p className='text-sec'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas."</p>
          </div>
        </div>
     </div>
       ))}
       <button className={` btn m-auto mt-5 mb-5 text-uppercase btn-main px-3 ${styles.viewMoreBtn}`}>View More</button>
      </div>
      <hr />
      <OurTeam/>
      <hr/>
      <BrandSwiper/>
    </div>
  </section>
  
  </>
}

export default AboutUs
