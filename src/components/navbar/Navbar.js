import React from 'react'
import { CtLinks, CtLogo, CtNavbar, ImgLogo } from './Navbar.styled';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-x2.png';

function Navbar() {
  return (
    <CtNavbar>
      <CtLogo>
        <ImgLogo src={logo} alt='logo factoría f5'/>
      </CtLogo>
      <CtLinks>
        <NavLink to={'/'} className={({isActive})=> isActive ? 'active' : ' '}>HOME</NavLink>
        <NavLink to={'/aprende'}>APRENDE</NavLink>
        <NavLink to={'/colabora'}>COLABORA</NavLink>
        <NavLink to={'/somos'}>SOMOS</NavLink>
        <NavLink to={'/blog'}>BLOG</NavLink>
        <NavLink to={'/contacto'}>CONTACTO</NavLink>
      </CtLinks>
    </CtNavbar>
  )
}

export default Navbar