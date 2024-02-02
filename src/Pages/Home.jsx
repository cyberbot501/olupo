import React from 'react'
import Nav from '../Layouts/Navbar/nav'
import Footer from '../Layouts/Footer/footer'
import Lstock from '../Componets/HomeComponent/livestock/lstock'
import Aboutls from '../Componets/HomeComponent/aboutls/aboutls'
import Farmp from '../Componets/HomeComponent/farmp/farmp'

export default function Home() {
  return (
    <div>
        <Nav />
        <Lstock />
        <Aboutls />
        <Farmp />
        <Footer />
    </div>
  )
}
