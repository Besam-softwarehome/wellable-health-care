import React from "react";
import "./Advantages.css";
import {
  FaRocket,
  FaWallet,
  FaMicroscope,
  FaUserMd
} from "react-icons/fa";

const Advantages = () => {
  return (
    <div className="advantages container">
      <div className="left">
        <h1>
          Why <span className="color">Choose</span> Us?
        </h1>
      </div>

      <div className="right">
        <ul className="advantage-list">

          <li>
            <div className="top">
              <FaRocket className="icon" />
              <h2>Fast Service</h2>
            </div>
            <p>
              Enjoy quick consultations, efficient diagnosis, and timely treatment
              designed to save you valuable time.
            </p>
          </li>

          <li>
            <div className="top">
              <FaWallet className="icon" />
              <h2>Affordable Care</h2>
            </div>
            <p>
              We provide quality healthcare solutions at fair prices, making trusted
              medical care accessible to everyone.
            </p>
          </li>

          <li>
            <div className="top">
              <FaMicroscope className="icon" />
              <h2>Modern Equipment</h2>
            </div>
            <p>
              Our advanced medical tools and technology help deliver accurate diagnosis
              and effective treatment results.
            </p>
          </li>

          <li>
            <div className="top">
              <FaUserMd className="icon" />
              <h2>Experienced Doctors</h2>
            </div>
            <p>
              Our skilled healthcare professionals are dedicated to providing expert care
              with compassion and professionalism.
            </p>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Advantages;


// import React from 'react'
// import './Advantages.css'
// import care from '../../assets/primary-care.png'

// const Advantages = () => {
//   return (
//     <div className='advantages container'>
//         <div className="left">
//            <h1>Why <span className='color'>Choose</span> Us?</h1>
//         </div> 
//         <div className='right'>
//             <p>At Wellable Health Care, we provide trusted medical services delivered by experienced doctors using modern equipment to ensure accurate diagnosis and effective treatment. Our focus is on quality care in a professional and comfortable environment. <br /><br />
//             We also prioritize fast and affordable services, making healthcare accessible without long waiting times. Our goal is to offer reliable, efficient, and patient-centered care you can depend on.</p>
//         </div>     
//     </div>
//   )
// }

// export default Advantages
