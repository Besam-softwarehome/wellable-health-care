import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import { IoArrowForwardCircle } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='hero'>
      <div className="text container">
        <div className="heading-text">
          <h1>Your <i className='color'>Health</i> Is What Matters To Us</h1>
        </div>
        <div className='paragraph-text'>
          <p>Reliable care paired with innovative solutions to enhance your health and overall wellbeing.</p>
          <Link to='/contact' className='btn hero-btn'>Book An Appointment <IoArrowForwardCircle size={25} style={{paddingLeft: '5px'}}/></Link>
        </div>
        <div className="counters">
          <Counter start = {0} end = {98} duration = {2000} delay = {0} sign = '%' name = 'Satisfaction Rate' />
          <Counter start = {0} end = {4} duration = {1000} delay = {0} sign = '+' name = 'Years of experience' />
          <Counter start = {0} end = {1000} duration = {2000} delay = {0} sign = '+' name = 'Patients Treated' />
        </div>
      </div>
    </div>
  )
}

export default Hero
