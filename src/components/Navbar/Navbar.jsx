import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo-2.jpeg'
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    function showNavList(){
        menu ? setMenu(false) :  setMenu(true);
    }
  return (
    <nav className="container">
        <div className="logo">
            <img src={logo} alt="logo" className="mylogo"/>
        </div>
        <div className="menu">
            <ul className={menu ? "show-menu" : ""}>
                <li><NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to='/about' className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink></li>
                <li><NavLink to='/services' className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
                <li><NavLink to='/testimonials' className={({ isActive }) => isActive ? "active" : ""}>Testimonials</NavLink></li>
                <li><NavLink to='/contact' className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink></li>
            </ul>
        </div>
         <div className='icon-container'>{menu ? <IoCloseSharp size={30} onClick={showNavList} /> : <TiThMenu  className='menu-icon' size={30} onClick={showNavList}/>}</div>
    </nav>
  )
}

export default Navbar
