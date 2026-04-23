import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroChange from '../components/HeroChange/HeroChange'
import image from '../assets/about-image.jpg'
import Testimonials from '../components/Testimonials/Testimonials'
import Stats from '../components/Stats/Stats'
import Trust from '../components/Trust/Trust'
import Footer from '../components/Footer/Footer'

const TestimonialsRoute = () => {
  return (
    <div>
      <Navbar />
      <HeroChange 
      image={image}
      title='Testimonials'
      text='Real feedback from people who trust our care and services.'
      />
      <Testimonials />
      <Stats />
      <Trust 
      title='Ready to experience quality healthcare?'
      text='We are here to provide trusted, professional, and compassionate care whenever
       you need it. Contact us today and let us support your journey to better health.'/>
       <Footer />
    </div>
    
  )
}

export default TestimonialsRoute
