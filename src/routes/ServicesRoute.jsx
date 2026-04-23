import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroChange from '../components/HeroChange/HeroChange'
import image from '../assets/about-image.jpg'
import Service1 from '../components/Services1/Services1'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Advantages from '../components/Advantages1/Advantages'
import Trust from '../components/Trust/Trust'
import Footer from '../components/Footer/Footer'

const ServicesRoute = () => {
  return (
    <div>
      <Navbar />
      <HeroChange 
      image={image}
      title='Our Services'
      text='Explore our wide range of trusted health screening and treatment services.'
      />
      <Service1 />
      <HowItWorks />
      <Advantages />
      <Trust 
      title='Need trusted healthcare services?'
      text='We offer professional screening, diagnosis, and treatment services designed to support 
      your health and wellbeing. Contact us today to get started.'/>
      <Footer />
    </div>
  )
}

export default ServicesRoute
