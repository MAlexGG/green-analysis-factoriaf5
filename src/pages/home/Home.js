import React from 'react'
import { CtHome } from './Home.styled'
import Header from '../../components/header/Header'
import Welcome from '../../components/welcome/Welcome'

function Home() {
  return (
    <CtHome>
        <Header/>
        <Welcome/>
    </CtHome>
  )
}

export default Home