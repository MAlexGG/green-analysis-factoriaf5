import React from 'react'
import { ADonation, ATxt, CtButtons, CtFactoria, CtFooter, TxtTitle, LogoFooter, CtSocial, ALink, ImgLinks, CtNav, TxtNav } from './Footer.styled';
import Button from '../button/Button';
import Logo from '../../assets/logos/logo-footer.webp';
import linkedin from '../../assets/socialmedia/linkedin.svg';
import twitter from '../../assets/socialmedia/twitter.svg';
import ig from '../../assets/socialmedia/instagram.svg';
import youtube from '../../assets/socialmedia/youtube.svg';
import facebook from '../../assets/socialmedia/facebook.svg';
import { Link } from 'react-router-dom';

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
            <ADonation href='https://www.teaming.net/factoriaf5' target='_blank'>
                <ATxt>¡HAZ TU DONACIÓN!</ATxt>
                <ATxt>Sólo 1€ al mes</ATxt>
            </ADonation>
            <LogoFooter src={Logo} alt='factoria f5 logo'/>
            <CtSocial>
                <ALink href='#'><ImgLinks src={linkedin} alt='linkedIn'/></ALink>
                <ALink href='#'><ImgLinks src={twitter} alt='twitter'/></ALink>
                <ALink href='#'><ImgLinks src={ig} alt='instagram'/></ALink>
                <ALink href='#'><ImgLinks src={youtube} alt='youtube'/></ALink>
                <ALink href='#'><ImgLinks src={facebook} alt='facebook'/></ALink>
            </CtSocial>
        </CtFactoria>
        <CtNav>
            <TxtNav>Todos los derechos reservados 2021</TxtNav>
            <Link className='navFooter' to='/aviso-legal'>Aviso legal</Link>
            <Link className='navFooter' to='/privacidad'>Política de Privacidad</Link>
            <Link className='navFooter' to='/cookies'>Política de Cookies</Link>
            <Link className='navFooter' to='/contacta'>Contacta</Link>
            <Link className='navFooter' to='/transparencia'>Transparencia</Link>
            <Link className='navFooter' to='/blog'>Blog</Link>
            <Link className='navFooter' to='/diseño'>Diseño web Barcelona</Link>
        </CtNav>
        
    </CtFooter>
  )
}

export default Footer