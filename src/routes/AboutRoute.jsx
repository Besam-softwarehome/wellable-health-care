import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroChange from '../components/HeroChange/HeroChange'
import image from '../assets/about-image.jpg'
import About from '../components/About/About'
import MissionVision from '../components/MissionVision/MissionVision'
import Advantages from '../components/Advantages1/Advantages'
import Trust from '../components/Trust/Trust'
import Footer from '../components/Footer/Footer'


const AboutRoute = () => {
  return (
    <div>
      <Navbar />
      <HeroChange 
      image={image}
      title='About Us'
      text='Discover who we are and how we care for your health.'
      />
      <About 
      p_text='We continue to strive for excellence by embracing innovation in healthcare 
      and maintaining a strong commitment to continuous improvement. We are passionate about 
      building a healthier community where every individual receives the attention, respect, 
      and care they deserve. Through dedication and integrity, we aim to make a lasting positive 
      impact on the lives we serve.'
      />
      <MissionVision />
      <Advantages />
      <Trust 
      title='Need medical help?'
      text='Our team is ready to assist you with trusted healthcare support and professional'/>
      <Footer />
    </div>
  )
}

export default AboutRoute
