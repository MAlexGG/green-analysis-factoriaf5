import React from 'react'
import { CtButton } from './Button.styled'

function Button(props) {
  return (
    <CtButton>{props.children}</CtButton>
  )
}

export default Button