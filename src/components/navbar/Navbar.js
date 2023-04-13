import React from 'react'
import { CtLinks, CtNavbar, ImgLogo } from './Navbar.styled';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-x2.png';

function Navbar() {
  return (
    <CtNavbar>
      <ImgLogo src={logo} alt='logo factoría f5'/>
      <CtLinks>
        <NavLink to={'/'}>HOME</NavLink>
        <NavLink to={'/'}>APRENDE</NavLink>
        <NavLink to={'/'}>COLABORA</NavLink>
        <NavLink to={'/'}>SOMOS</NavLink>
        <NavLink to={'/'}>BLOG</NavLink>
        <NavLink to={'/'}>CONTACTO</NavLink>
      </CtLinks>
    </CtNavbar>
  )
}

export default Navbar