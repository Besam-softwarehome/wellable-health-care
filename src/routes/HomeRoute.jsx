import React from 'react'
import Navbar from '../components/Navbar/Navbar'
// import Hero from '../components/Hero/Hero'
// import Services from '../components/Services/Services'
import About from '../components/About/About'
import Advantages from '../components/Advantages1/Advantages'
import Testimonials from '../components/Testimonials/Testimonials'
// import FAQ from '../components/FAQ/FAQ'
import Title from '../components/Title/Title'
import Contact from '../components/Contact/Contact'
// import Hero2 from '../components/Hero2/Hero2'
import Hero3 from '../components/Hero3/Hero3'
import Services1 from '../components/Services1/Services1'
import Trust from '../components/Trust/Trust'
import Stats from '../components/Stats/Stats'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Footer from '../components/Footer/Footer'
import { motion } from "framer-motion";


const HomeRoute = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero2 /> */}
      <Hero3 />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Stats />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Services1 />
      </motion.div>
      {/* <Services /> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
         <Advantages />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Testimonials />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <HowItWorks />
      </motion.div>
      {/* <FAQ /> */}
      {/* <Form /> */}
      {/* <Address /> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
            <Title 
            title='Contact'
            paragraph='Get in touch with Wellable Health Care today. 
            Our team is ready to answer your questions and provide the support you need for your health 
            and wellbeing.'
            />
        </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Contact />
      </motion.div>
      {/* <Map /> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Footer />
      </motion.div>
    </div>
  )
}

export default HomeRoute
