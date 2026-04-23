import React from 'react'
import './Stats.css'
import Counter from '../Counter/Counter'

const Stats = () => {
  return (
    <>
        <div className=''>
            <div className="stats">
                <Counter start = {0} end = {98} duration = {2000} delay = {0} sign = '%' name = 'Satisfaction Rate' className='counter'/>
                <Counter start = {0} end = {4} duration = {2000} delay = {0} sign = '+' name = 'Years of experience' className='counter'/>
                <Counter start = {0} end = {1000} duration = {2000} delay = {0} sign = '+' name = 'Patients Treated' className='counter'/>
            </div>
        </div>
    </>
  )
}

export default Stats
