import React from 'react'
import { CtButton } from './Button.styled'

function Button(props) {
  return (
    <CtButton color={props.color} background={props.background} hColor={props.hColor} hBackground={props.hBackground}>{props.children}</CtButton>
  )
}


export default Button


Button.defaultProps = {
  color: 'var(--color-main)',
  background: 'white',
  hColor: 'white',
  hBackground: 'var(--color-dark)'
}
