import React from 'react'

const Service = (props) => {
  return (
    <div>
       <div className='service-card'>
              <div className="service-image">
                  <img src={props.image} alt="image" />
              </div>
              <div className='service-text'>
                  <h1>{props.title}</h1>
                  <p>{props.notes}</p>
                  <ul>
                      <li>{props.list.num1}</li>
                      <li>{props.list.num2}</li>
                      <li>{props.list.num3}</li>
                  </ul>
              </div>
              </div>
    </div>
  )
}

export default Service
