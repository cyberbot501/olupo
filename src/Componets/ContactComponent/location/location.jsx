import React from 'react'
import './location.css'
import maps from '../../../Assets/officemap.png'

export default function location() {
  return (
    <div className='location'>
        <div className='office'>
            <h1>OUR OFFICE</h1>
            <p className='off'> 232, ogbomoso/ilorin express road, Ogbomoso,  Oyo state, Nigeria.</p>
            <p className='ice'>find us on <a href=''> Google Map</a></p>
        </div>

        <div className='m-locate'>
            <img src={maps} alt="" />
        </div>
    </div>
  )
}
