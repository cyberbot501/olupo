import React from 'react'
import Nav from '../Layouts/Navbar/nav'
import Footer from '../Layouts/Footer/footer'
import Location from '../Componets/ContactComponent/location/location'
import Cform from '../Componets/ContactComponent/cform/cfrom'

export default function Contact() {
  return (
    <div>
        <Nav />
        <Location />
        <Cform />
        <Footer />
  </div>
  )
}
