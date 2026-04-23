import React from 'react'
import './Hero3.css'
import { Link } from 'react-router-dom'
import { IoArrowForwardCircle, IoCallOutline } from "react-icons/io5";
import { motion } from 'framer-motion'

const Hero3 = () => {
  return (
   <div className='hero'>
          <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}>
               <div className="left"> 
                 <div className="text">
                    <h1>Where Care Meets Commitment</h1>
                    <p>At Wellable Health Care, we believe quality care starts
                      with compassion. We treat every individual like family,
                      delivering personalized support you can trust.
                    </p>
                    <div className="buttons">
                      <Link to='/contact' className='btn'>BOOK CONSULTATION <IoArrowForwardCircle size={25} style={{ paddingLeft: '5px' }} /></Link>
                      <Link to='/contact' className='btn call-btn'>GET IN TOUCH <IoCallOutline size={25} style={{ paddingLeft: '5px' }} /></Link>
                    </div>
                 </div>
              </div>
          </motion.div>
          <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}>
              <div className="right">
                <div className="image"></div>
              </div>
         </motion.div>
  </div>
  )
}

export default Hero3
