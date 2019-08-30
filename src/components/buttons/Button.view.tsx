import React, { FC } from 'react'

import Btn from './Button.style'
import Props from './Button.model'

const Button: FC<Props> = props => {
  return (
    <Btn type="button" onClick={ props.onClick }>
      { props.children }
    </Btn>
  )
}

export default Button