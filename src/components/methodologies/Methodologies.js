import React from 'react'
import { CtMethodologies, CtMethodology, ImgIcon, Txt, TxtTitle } from './Methodologies.styled';
import icoGradcap from '../../assets/icons/birrete.svg';
import icoArrow from '../../assets/icons/arrow.svg';
import icoRocket from '../../assets/icons/rocket.svg';
import icoPeople from '../../assets/icons/people.svg';


function Methodologies() {
  return (
    <CtMethodologies>
        <CtMethodology>
            <ImgIcon src={icoGradcap} alt='graduation cap icon'/>
            <TxtTitle>Aprende sin barreras</TxtTitle>
            <Txt>Porque no importa tu edad, tu género, tu nivel de estudios o tu poder adquisitivo para ser desarrollador/a.</Txt>
        </CtMethodology>
        <CtMethodology>
            <ImgIcon src={icoArrow} alt='arrow icon'/>
            <TxtTitle>Una metodología innovadora</TxtTitle>
            <Txt>100% práctica y enfocada a las tecnologías más demandadas en el mercado laboral, la metodología exclusiva Simplon.co está probada en más de 15 países en el mundo.</Txt>
        </CtMethodology>
        <CtMethodology>
            <ImgIcon src={icoRocket} alt='arrow icon'/>
            <TxtTitle>Un modelo de éxito</TxtTitle>
            <Txt>En menos de 6 meses más del 80% de nuestros/as alumni ha encontrado trabajo, emprende su propio proyecto o sigue formándose en el ámbito tecnológico.</Txt>
        </CtMethodology>
        <CtMethodology>
            <ImgIcon src={icoPeople} alt='arrow icon'/>
            <TxtTitle>Súmate a nuestra comunidad</TxtTitle>
            <Txt>Siempre podrás contar con nuestra comunidad coders y alumni de Factoría F5 y el apoyo de la red de escuelas F5.</Txt>
        </CtMethodology>
    </CtMethodologies>
  )
}

export default Methodologies