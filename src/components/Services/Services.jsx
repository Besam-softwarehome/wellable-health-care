import React from 'react'
import './Services.css'
import Title from '../Title/Title'
import svg from '../../assets/general-health-screening.png'
import Service from './Service'
import dataArray from '../../Carddata'

const Services = () => {
  return (
    <div className='services'>
        <Title 
        title='SERVICE'
        subtitle='Quality Healthcare You Can Trust'
        />
        <div className="service-container container">
      {  dataArray.map((value, index) =>{
            return (
                <Service 
                key={index}
                image={value.image} 
                title={value.title} 
                notes={value.notes} 
                list={value.list}
                /> 
            )
        }) } 
        </div>
    </div>
  )
}

export default Services
