import React from 'react'
import { CtWelcome, Txt, TxtSubtitle, TxtTitle } from './Welcome.styled'
import Button from '../button/Button'

function Welcome() {
  return (
    <CtWelcome>
        <TxtTitle>¡Sí, programar es para ti!</TxtTitle>
        <Txt>Somos la ​primera red de escuelas digitales solidarias, inclusivas y gratuitas en España.</Txt>
        <Txt>Formamos a personas en situación de vulnerabilidad en las competencias más demandadas por las empresas del sector tecnológico combatiendo la brecha digital de género.</Txt>
        <TxtSubtitle>¿Quieres aprender?</TxtSubtitle> 
        <Button text='¡Apúntate ahora!'/>
    </CtWelcome>
  )
}

export default Welcome