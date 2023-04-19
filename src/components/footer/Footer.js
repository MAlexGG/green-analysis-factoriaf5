import React from 'react'
import { CtButtons, CtFactoria, CtFooter, TxtTitle } from './Footer.styled';
import Button from '../button/Button';

function Footer() {
  return (
    <CtFooter>
        <TxtTitle>ROMPEMOS LOS CÓDIGOS</TxtTitle>
        <CtButtons>
            <Button color='white' background='var(--color-main)' hColor='var(--color-dark)' hBackground='var(--color-main)'>Apúntate a nuestras formaciones</Button>
            <Button color='white' background='var(--color-main)' hColor='var(--color-dark)' hBackground='var(--color-main)'>Colabora con nuestro proyecto</Button>
            <Button color='white' background='var(--color-main)' hColor='var(--color-dark)' hBackground='var(--color-main)'>Quiero formar parte de Factoría F5</Button>
        </CtButtons>
        <CtFactoria>
        <Button color='white' background='var(--color-main)' hColor='var(--color-dark)' hBackground='var(--color-main)'>¡HAZ TU DONACIÓN!<br/> Sólo 1€ al mes</Button>
        </CtFactoria>
    </CtFooter>
  )
}

export default Footer