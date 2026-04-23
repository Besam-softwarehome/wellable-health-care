import React from 'react'
import './HeroChange.css'

const HeroChange = ({image, title, text}) => {
  return (
    <div className='herochange'>
      <img src={image} alt="" className='background'/>
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default HeroChange
