import React, { FC } from 'react'

import { Btn } from './Button.style'

interface Props {
  onClick(): void,
  label: string,
  color?: string,
  icon?: string
}

const Button: FC<Props> = props => {
  return (
    <Btn type="button" onClick={ props.onClick } color={ props.color }>
      { props.label }
    </Btn>
  )
}

export default Button