import React from 'react'
import { CtSupport, Txt, TxtHashtag, TxtSubtitle, TxtTitle, Video } from './Support.styled'
import Button from '../button/Button'
import { CtCompanies } from '../supportCompanies/SupportCompanies.styled'

function Support() {
  return (
    <CtSupport>
        <TxtTitle>¿Eres una empresa comprometida?</TxtTitle>
        <Txt>Somos un puente único e innovador entre el mundo social y el mundo económico.</Txt>
        <Button color='white' background='var(--color-dark)' hColor='var(--color-main)' hBackground='white'>Únete</Button>
        <Video src="https://www.youtube.com/embed/7uv9MOBdKic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
        <TxtSubtitle>Nos apoyan</TxtSubtitle>
        <TxtHashtag>#EmpresasComprometidas</TxtHashtag>
        <CtCompanies/>

    </CtSupport>
  )
}

export default Support