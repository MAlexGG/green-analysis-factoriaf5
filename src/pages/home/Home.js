import React from 'react'
import { CtHome } from './Home.styled'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Welcome from '../../components/welcome/Welcome'
import Google from '../../components/google/Google'
import Slider from '../../components/slider/Slider'

function Home() {
  return (
    <CtHome>
        <Header/>
        <Navbar/>      
        <Slider/>
        <Welcome/>
        <Google/>
    </CtHome>
  )
}

export default Home