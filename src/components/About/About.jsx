import React from 'react'
import './About.css'
import { Link, useLocation } from 'react-router-dom'
import aboutImage from '../../assets/hero-doctor.jpg'

const About = ({ p_text}) => {

  const location = useLocation();

  // routes where button should NOT appear
  const hideButtonRoutes = ["/about"];

  const hideButton = location.pathname === "/about";

  return (
    <div className='about container'>
            <div className="about-left">
                <img src={aboutImage} alt="about image" className='img' />
            </div>
            <div className="about-right">
                {/* <h3>ABOUT WELLABLE</h3> */} 
                <h1>About</h1>
                <p>At Well Able Health Care, we are committed to providing 
                    compassionate, reliable, and professional healthcare consultancy
                     services that place your wellbeing first. Our mission is to 
                     empower individuals, families, and organizations with trusted 
                     medical guidance, preventive care solutions, and personalized 
                     wellness support.
                </p>
                <p>We believe quality healthcare should be accessible, responsive, and
                     centered around the unique needs of every client. With a dedicated
                      team of experienced professionals, we work to improve lives through 
                      expert consultations, health education, and patient-focused care.
                </p>
                 <p>At Well Able Health Care, your health is our priority, and we strive 
                    to build lasting relationships founded on trust, excellence, and genuine 
                    care.
                </p>
                <p>{p_text}</p>
                {/* BUTTON ONLY CONDITIONAL */}
                {!hideButton && (
                    <Link to="/about" className="btn btn-white">Learn More</Link>
                 )}
            </div>
        </div>
  )
}

export default About
