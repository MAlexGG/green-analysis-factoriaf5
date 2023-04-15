import React from 'react'
import { CtFemCoders, CtGoogle, ImgGoogle, Txt, TxtTitle } from './Google.styled'
import Button from '../button/Button';
import google from '../../assets/logos/google-org-logo-400x89.png';

function Google() {

    const handleClick = () => {
        window.open('https://femcoders.factoriaf5.org/', '_blank');
    }

  return (
    <CtGoogle>
        <CtFemCoders onClick={handleClick}>
            <TxtTitle>FemCoders_F5</TxtTitle>
            <Txt>¿Eres mujer? Encuentra trabajo en el sector de las nuevas tecnologías con nuestras formaciones inclusivas y gratuitas para mujeres impulsadas por Google.org</Txt>
            <Button>¡Descubre las formaciones!</Button>
            <ImgGoogle src={google} alt='google.org logo'/>
        </CtFemCoders>
    </CtGoogle>
  )
}

export default Google