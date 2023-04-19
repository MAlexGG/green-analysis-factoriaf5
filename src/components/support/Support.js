import React from 'react'
import { CtSupport, Txt, TxtHashtag, TxtSubtitle, TxtTitle, Video } from './Support.styled'
import Button from '../button/Button'
import SupportCompanies from '../supportCompanies/SupportCompanies'
import SupportOrganizations from '../supportOrganizations/SupportOrganizations'
import News from '../news/News'

function Support() {
  return (
    <CtSupport>
        <TxtTitle>¿Eres una empresa comprometida?</TxtTitle>
        <Txt>Somos un puente único e innovador entre el mundo social y el mundo económico.</Txt>
        <Button color='white' background='var(--color-dark)' hColor='var(--color-main)' hBackground='white'>Únete</Button>
        <Video src="https://www.youtube.com/embed/7uv9MOBdKic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
        <TxtSubtitle>Nos apoyan</TxtSubtitle>
        <TxtHashtag>#EmpresasComprometidas</TxtHashtag>
        <SupportCompanies/>
        <TxtHashtag>Entidades y Organismos colaboradores</TxtHashtag>
        <SupportOrganizations/>
        <TxtHashtag>Novedades en: <strong>@factoria_f5</strong></TxtHashtag>
        <News/>
        

    </CtSupport>
  )
}

export default Support