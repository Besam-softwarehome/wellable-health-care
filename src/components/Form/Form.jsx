import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <input type='text' placeholder='Full Name'></input>
            <input type='text' placeholder='Phone'></input> 
            <input type='text' placeholder='Email'></input>
            <textarea rows='6' placeholder='Type your message here'/>
            <button className="btn call-btn">Submit</button>
        </form>      
    </div>
  )
}

export default Form
