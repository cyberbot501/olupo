import React from 'react'
import './calendar.css'
import calendarf from '../../../Assets/cal.png'

export default function calendar() {
  return (
    <div className='calendar'>
        <div className='cals'>
            <hr className='en' />
            <div className='cal'>
                <h2>Farming Calendar</h2>
                <p>Know The Best Time To Plant Your Crops.</p>
                <button className='len'>Learn More</button>
            </div>
        </div>

        <div className='dar'>
            <img src={calendarf} alt="" />
        </div>
    </div>
  )
}
