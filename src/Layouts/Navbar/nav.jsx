import React from 'react'
import logo from '../../Assets/flat-design-farmers-market-logo_23-2149332945.avif'
import './nav.css'

export default function nav() {
  return (
    <div className='f-nav'>
            <div className='s-nav'>
                <img src={logo} alt="" />
                <p>Olupo Agric</p>
            </div>

            <ul className='l-nav'>
               <li><a href='#'>Home</a></li>
               <li><a href='#'>About Us</a></li>
               <li><a href='#'>our Crops</a></li>
               <li><a href='#'>Products</a></li>
               <li><a href='#'>Services</a></li>
               <li><a href='#'>Contact Us</a></li>
            </ul>
    </div>
  )
}
