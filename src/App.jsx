import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomeRoute from './routes/HomeRoute'
import AboutRoute from './routes/AboutRoute'
import ServicesRoute from './routes/ServicesRoute'
import TestimonialRoute from './routes/TestimonialsRoute'
import ContactRoute from './routes/ContactRoute'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={ <HomeRoute /> } />
      <Route path='/about' element={ <AboutRoute /> } />
      <Route path='/services' element={ < ServicesRoute /> } />
      <Route path='/testimonials' element={ <TestimonialRoute /> } />
      <Route path='/contact' element={ <ContactRoute /> } />
    </Routes>
    </>
  )
}

export default App
