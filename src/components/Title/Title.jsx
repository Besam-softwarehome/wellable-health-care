import React from 'react'
import './Title.css'

const Title = ({title, paragraph}) => {
  return (
    <div>
      <div className="services-header">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  )
}

export default Title
