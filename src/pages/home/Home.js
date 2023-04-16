import React from 'react'
import { CtHome } from './Home.styled'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Welcome from '../../components/welcome/Welcome'
import Google from '../../components/google/Google'
import Slider from '../../components/slider/Slider'
import Impact from '../../components/impact/Impact'
import Methodologies from '../../components/methodologies/Methodologies'
import Testimonials from '../../components/testimonials/Testimonials'
import Support from '../../components/support/Support'

function Home() {
  return (
    <CtHome>
        <Header/>
        <Navbar/>  
        <Slider/>
        <Welcome/>
        <Google/>
        <Impact/>
        <Methodologies/>
        <Testimonials/>
        <Support/>
    </CtHome>
  )
}

export default Home