import React from 'react'
import './Footer.css'
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";


const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <div className='footer container'>
        <div className="links">
            <div className="hours">
                <IoTime />
                <h2>Working Hours</h2>
                <ul>
                    <li>Monday - Friday</li>
                    <li>08:00 - 17:00hrs</li>
                    <li>Saturday & Sunday Appointments Only</li>
                    <li><IoCall /> +260 977 655 454</li>
                    <li><MdOutlineMail /> wellablehealthcare@gmail.com</li>

                </ul>
            </div>     
            <div className="quick-links">
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="service-links">
                <h2>Services</h2>
                 <ul>
                    <li>Computerized Full Body Scanning</li>
                    <li>Back & Joint Pains</li>
                    <li>Diabetes Care</li>
                    <li>Gases & Ulcers</li>
                    <li>Hypertension (BP)</li>
                    <li>Stroke Recovery</li>
                    <li>Fibroids Treatment</li>
                    <li>Erectile Dysfunction</li>
                </ul>
            </div>
              <div className="socials">
                <h2>Socials</h2>
                <p>You can also connect with us on our social media platforms for updates,
                     inquiries, and to stay in touch with our latest news and services.</p>
             <div className='socials'>
                <FaFacebookSquare size={35} className='facebook'/>
                <FaWhatsappSquare size={35} className='whatsapp'/>
             </div>
            </div>
        </div>
        <div className='rights-section'>
           <p>&copy;{year}. Wellable Health Care. All rights reserved.</p>      
        </div>
    </div>
  )
}

export default Footer
