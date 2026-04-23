import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";


const Question = (props) => {
  return (
    <div className='faq-wrapper'>
        <div onClick={props.onClick} className='question'>
            <p>{props.question}</p>
            <span>{props.isOpen ? <MdOutlineClose size={25} /> : <FaPlus size={20} />}</span>
        </div>
        <p className={`answer ${props.isOpen ? 'open' : 'closed'}`}>{props.answer}</p>
    </div>
  )
}
export default Question
