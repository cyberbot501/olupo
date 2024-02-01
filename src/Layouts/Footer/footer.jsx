import React from 'react'
import './footer.css'

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
    </div>
  )
}
