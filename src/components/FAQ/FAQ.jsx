import React, { useState } from 'react'
import './FAQ.css'
import data from '../../FAQ'
import Question from './Question'
import Title from '../Title/Title'

const FAQ = () => {

    const [showSelectedQ, setSelectedQ] = useState(null)

    function displayAnswer(index){
        
      if (showSelectedQ === index) {
            setSelectedQ(null);
        } else {
            setSelectedQ(index);
    }
    }

  return (
    <div className='faq'>
      <div className='q-a'>
        <Title 
        title='Frequently Asked Questions'
        paragraph='Check out our FAQs to learn more about Wellable and our services'/>
        <div className='top-div'>
        {data.map((d, index)=>{
               return <Question 
               key={d.id}
               question={d.question} 
               answer={d.answer} 
               onClick={()=>displayAnswer(index)}
               isOpen={showSelectedQ === index}
               />
            })}
        </div>
      </div>
    </div>
  )
}

export default FAQ
