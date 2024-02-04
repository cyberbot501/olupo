import React from 'react'
import './news.css'
import ftech from '../../../Assets/ftech.jpg'
import fbird from '../../../Assets/fbird.jpg'
import fsec from '../../../Assets/fsec.jpg'

export default function news() {
  return (
    <div className='news'>
        <div className='new'>
            <img src={ftech} alt="" />
            <h3>Farm tech depends on broadband access</h3>
            <p className='ew'>
                Farmers and ranchers in the 21st century are
                increasingly turning to soil sensors, online data hubs and other advanced technologies designed to help them 
                develop more precise uses of water and other inputs, and keep up with the paperwork.
            </p>
            <p className='nw'>Jul 14, 2021</p>
        </div>

        <div className='new'>
            <img src={fbird} alt="" />
            <h3>How Bowles Farming Company Supports People and Birds - Even During a Pandemic</h3>
            <p className='ew'>
                Bowles Farming Company (BFCo) is located next to Grasslands Ecological
                Area and San Luis National Wildlife Refuge outside of Los Banos, California,
            </p>
            <p className='nw'>Jun 24, 2020</p>
        </div>

        <div className='new'>
            <img src={fsec} alt="" />
            <h3>Is protecting farmworkers a national security issue? Fresno-area farmers say yes</h3>
            <p className='ew'>Protecting farmworkers during a health crisis is an issue of national security, according to farmers, industry advocates and public health professors who say outbreaks on the industry’s front lines could jeopardize the nation’s food supply chain.</p>
            <p className='nw'>Apr 18, 2020</p>
        </div>
    </div>
  )
}
