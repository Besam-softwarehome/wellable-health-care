import React from 'react'
import './Contact.css'
import { FaEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Title from '../Title/Title'
import Form from '../Form/Form';
import Address from '../Address/Address';


const Contact = () => {
  return (
    <div>
    <div className='contact-section'>
        <div className='left'>
            <Address />
        </div>
        <div className="right">
            <Form />
        </div>      
    </div>
    </div>
  )
}

export default Contact
