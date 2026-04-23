import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroChange from '../components/HeroChange/HeroChange'
import image from '../assets/about-image.jpg'
import Contact from '../components/Contact/Contact'
import Map from '../components/Map/Map'
import Footer from '../components/Footer/Footer'
import FAQ from '../components/FAQ/FAQ'
const ContactRoute = () => {
  return (
    <div>
      <Navbar />
      <HeroChange 
      image={image}
      title='Contact Us'
      text='Contact us today and let us take care of your health needs.'
      />
      <Contact />
      <Map />
      <FAQ />
      <Footer />
    </div>
  )
}

export default ContactRoute
