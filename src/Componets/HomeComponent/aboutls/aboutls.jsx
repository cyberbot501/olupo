import React from 'react'
import './aboutls.css'
import aboutls1 from '../../../Assets/istockphoto-1167064447-612x612.jpg'
import aboutls2 from '../../../Assets/photo-1583577612013-4fecf7bf8f13.avif'

export default function aboutls() {
  return (
    <div className='aboutls'>
        <div className='boutls'>
            <div className='boutls-ws'>
                <hr className='ou' />
                <div className='boutls-w'>
                    <h3>About Us</h3>
                    <h2>Olupo Agricuture Is Established On</h2>
                    <p>To engage in business of Agricultural services, produce and processing, marketing, 
                        distribution, wholesales and retails of kinds of Cocoa, Cashew nuts and all 
                        categories of fruit product. <br/> <br/> Also deal in the business of chemical (Agro-allied) services, 
                        importation of Agricultural equipment, raw materials and warehouse of all 
                        Agricultural produce, agricultural farming, mechanized farming, fish farming, 
                        fish mills, poultry farming, importation of farm inputs, livestock breeders, 
                        animal husbandry and Agricultural services, farm produce and all kind of Agricultural 
                        equipment, tools, marketing, importation of Agricultural raw material, 
                        warehouse of all Agricultural produce and products in all ramifications
                    </p>
                </div>
               
            </div>

            <div className='boutls-img'>
                <img src={aboutls1} alt="" />
            </div>
        </div>

        <div className='boutls1'>

            <div className='abotls-img'>
                <img src={aboutls2} alt="" />
            </div>

            <div className='abotls-ws'>
                <div className='abotls-w'>
                    <p>To engage in business of factory natural juice and carry on the production and 
                        packaging and sealing of natural juice. To carry on juice purification, treatment 
                        services, food production, food processing, foodstuffs, beverages, distribution, 
                        suppliers of all kinds of food items, process of fruit juice (Orange, Cashew, Mango, Guava, Apple, 
                        Pineapple, Strawberry, Grape, Watermelon, Coconut and Ginger juice).
                    </p>
                </div>

                <hr className='ot' />
            </div>

        </div>
    </div>
  )
}
