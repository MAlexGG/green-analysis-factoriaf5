import React from 'react'
import { ALink, CtLinks, CtHeader, CtLang, CtSocial, CtSlider, ImgLinks } from './Header.styled'
import Navbar from '../navbar/Navbar';
import linkedin from '../../assets/socialmedia/linkedin.svg';
import twitter from '../../assets/socialmedia/twitter.svg';
import ig from '../../assets/socialmedia/instagram.svg';
import youtube from '../../assets/socialmedia/youtube.svg';
import facebook from '../../assets/socialmedia/facebook.svg';

function Header() {
  return (
    <CtHeader>
        <CtLinks>
            <CtLang>
                <ALink href='#'>ES</ALink>
                <ALink href='#'>CA</ALink>
            </CtLang>
            <CtSocial>
                <ALink href='#'><ImgLinks src={linkedin} alt='linkedIn'/></ALink>
                <ALink href='#'><ImgLinks src={twitter} alt='twitter'/></ALink>
                <ALink href='#'><ImgLinks src={ig} alt='instagram'/></ALink>
                <ALink href='#'><ImgLinks src={youtube} alt='youtube'/></ALink>
                <ALink href='#'><ImgLinks src={facebook} alt='facebook'/></ALink>
            </CtSocial>
        </CtLinks>
        <Navbar/>
        <CtSlider>
            {/* Video */}
        </CtSlider>
    </CtHeader>
  )
}

export default Header