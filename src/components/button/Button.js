import React from 'react'
import { CtButton } from './Button.styled'

function Button(props) {
  return (
    <CtButton>{props.text}</CtButton>
  )
}

export default Button