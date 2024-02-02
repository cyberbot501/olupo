import React from 'react'
import './farmp.css'
import lsbreeding from '../../../Assets/liv breeding.jpeg'
import milling from '../../../Assets/feed milling.jpg'
import tools from '../../../Assets/farming tools.jpeg'
import fruit from '../../../Assets/fruits.jpeg'
import chem from '../../../Assets/chem.jpeg'
import lste from '../../../Assets/livestock e.jpg'

export default function farmp() {
  return (
    <div className='farmp'>
        <h2>OUR PRODUCTS</h2>

        <div class="products">
            <div class="item">
                <img src={milling} alt="" />
                <button className='read'>Feed Milling</button>
                <hr className='more'/>
            </div>

            <div class="item">
                <img src={fruit} alt="" />
                <button className='read'>Fruit Faming/ Fruit Production</button>
                <hr className='more'/>
            </div>

            <div class="item">
                <img src={chem} alt="" />
                <button className='read'>Chemical(Agro-allied)</button>
                <hr className='more'/>
            </div>

            <div class="item">
                <img src={tools} alt="" />
                <button className='read'>Farming Tools</button>
                <hr className='more'/>
            </div>

            <div class="item">
                <img src={lste} alt="" />
                <button className='read'>Livestock Feed Ingredients </button>
                <hr className='more'/>
            </div>

            <div class="item">
                <img src={lsbreeding} alt="" />
                <button className='read'>LiveStock Breeding</button>
                <hr className='more'/>
            </div>

        </div>

    </div>
  )
}
