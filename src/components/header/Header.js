import React from 'react'
import { ACatalan, ASpanish, CtExternal, CtHeader, CtLang, CtSocial } from './Header.styled'
import Navbar from '../navbar/Navbar';

function Header() {
  return (
    <CtHeader>
        <CtExternal>
            <CtLang>
                <ASpanish href='#'>ES</ASpanish>
                <ACatalan href='#'>CA</ACatalan>
            </CtLang>
            <CtSocial>

            </CtSocial>
        </CtExternal>
        <Navbar/>
    </CtHeader>
  )
}

export default Header