import React from 'react'
import './Address.css'
import { FaEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Address = () => {
  return (
    <div>
         <div className="contact-details">
                  <div className='title'>
                      <h3>Send Us a Message</h3><FaEnvelope size={25} color='#6EB487' className='svg'/>
                  </div>
          
                  <p>Send us a message with your questions or concerns, and our team will get back to you
                     promptly with the support you need.
                  </p>
                  <ul>
                      <li><IoCall size={50} color='#6EB487' className='svg'/> <h3>Phone</h3></li>
                      <p>+260 977 655 454</p>
                      <li><MdOutlineMail size={50} color='#6EB487' className='svg'/> <h3>Email</h3></li>
                      <p>wellablehealthcare@gmail.com</p>
                      <li><FaLocationDot size={50} color='#6EB487' className='svg'/> <h3>Address</h3></li>
                      <p>Plot No 04 from NATSAVE bank, along Great East Road, Choongwe, Zambia.</p>
                  </ul>
              </div>
    </div>
  )
}

export default Address
