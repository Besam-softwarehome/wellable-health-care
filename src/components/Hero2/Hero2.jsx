import React from 'react'
import './Hero2.css'
import image from '../../assets/image-2.jpg'
import { Link } from 'react-router-dom'
import { IoArrowForwardCircle } from "react-icons/io5";
import video from '../../assets/video-bg.mp4'

const Hero2 = () => {
  return (
    <div>
        <video
         autoPlay 
         muted 
         loop 
         playsInLine 
         className="bg-video">
            <source src={video} type="video/mp4" />
        </video>
        <div className='hero container'>
            <div className="left">
                <div className="container-left">
                    <h1>Your Health Is What Matters To Us </h1>
                    <p> We provide reliable, patient-centered care with innovative solutions to support your health and wellbeing—helping you feel better and live healthier every day.
                    </p>
                    <Link to='/contact' className='btn hero-btn'>
                        BOOK AN APPOINTMENT
                        <IoArrowForwardCircle size={25} style={{paddingLeft: '5px'}}/>
                    </Link>
                </div>
            </div>
            <div className="right">
                <img src={image} alt="" className='image' />
            </div>
        </div>
    </div>
  )
}

export default Hero2
