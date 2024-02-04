import React from 'react'
import Nav from '../Layouts/Navbar/nav'
import Footer from '../Layouts/Footer/footer'
import Lstock from '../Componets/HomeComponent/livestock/lstock'
import Aboutls from '../Componets/HomeComponent/aboutls/aboutls'
import Farmp from '../Componets/HomeComponent/farmp/farmp'
import Calendar from '../Componets/HomeComponent/calendar/calendar'
import News from '../Componets/HomeComponent/news/news'
import Field from '../Componets/HomeComponent/field/field'

export default function Home() {
  return (
    <div>
        <Nav />
        <Lstock />
        <Aboutls />
        <Farmp />
        <Calendar />
        <News />
        <Field />
        <Footer />
    </div>
  )
}
