import React from 'react'
import './location.css'
import maps from '../../../Assets/officemap.png'

export default function location() {
  return (
    <div className='location'>
        <div className='office'>
            <h1>OUR OFFICE</h1>
            <p className='off'> 232, ogbomoso/ilorin express road, Ogbomoso,  Oyo state, Nigeria.</p>
            <p className='ice'>find us on <a href='https://www.google.com/maps/search/fet+lx+near+Ladoke+Akintola+University,+Oyo%2F+Ilorin+Road,+Ogbomosho/@8.16671,4.2573227,15.79z?entry=ttu'> Google Map</a></p>
        </div>

        <div className='m-locate'>
            <img src={maps} alt="" />
        </div>
    </div>
  )
}
