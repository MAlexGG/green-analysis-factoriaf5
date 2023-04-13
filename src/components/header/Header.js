import React from 'react'
import { ALang, CtExternal, CtHeader, CtLang, CtSlider, CtSocial } from './Header.styled'
import Navbar from '../navbar/Navbar';

function Header() {
  return (
    <CtHeader>
        <CtExternal>
            <CtLang>
                <ALang href='#'>ES</ALang>
                <ALang href='#'>CA</ALang>
            </CtLang>
            <CtSocial>
                {/* Redes Sociales */}

            </CtSocial>
        </CtExternal>
        <Navbar/>
        <CtSlider>
            {/* Video */}
        </CtSlider>
    </CtHeader>
  )
}

export default Header