import React from 'react'
import './footer.css'
import logos from '../../Assets/flat-design-farmers-market-logo_23-2149332945.avif'

export default function footer() {
  return (
    <div className='footer'>
        <div className='newsletter'>
          <p>JOIN OUR NEWLETTER</p>
          <div className='signup'>
            <input type='text'/>
            <button>Sign Up</button>
          </div>
        </div>

        <hr/>

        <div className='main-ref'>
          <div className='about-f'>
            <p className='tops'>ABOUT OLUPO AGRIC</p>
            <p>Felis eget nunc loborits mattis<br/> aliquam facuiblus puru in<br/> massa, aubic ornare viverra<br/> tellus lorem sit.</p>
            <img src={logos} alt="" />

          </div>

          <div className='get-in'>
            <p className='tops'>GET IN TOUCH</p>
            <p>Prinsengracht 250, <br/>Amsterdam Nigeria</p>
            <p>+234 7675 8658 878<br/> olupoagric@gmail.com</p>
            <p><a href='#'>Show map</a></p>

          
          </div>

          <div className='useful-link'>
            <p className='tops'>USEFUL LINK</p>
            <ul className='n-nav'>
               <li><a href='#'>Home</a></li>
               <li><a href='#'>About Us</a></li>
               <li><a href='#'>our Crops</a></li>
               <li><a href='#'>Feed Mill</a></li>
               <li><a href='#'>Services</a></li>
               <li><a href='#'>Contact Us</a></li>
            </ul>
            
          </div>

          <div className='opening'>
            <p className='tops'>FARM OPENING HOURS</p>
            <p>Mon-Fri <span>09:00-20:00 hrs</span></p>
            <p>Saturday <span>09:00-20:00 hrs</span></p>
            <p>Sundays <span>09:00-20:00 hrs</span></p>
          </div>
        </div>

        <hr/>

        <div className='social'></div>
    </div>
  )
}
