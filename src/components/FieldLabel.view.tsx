import React, { FC } from 'react'
import styled from 'styled-components'

import colors from '../styles/color.style'

const Label = styled.label`
  color: ${ colors.lightGrey };
  display: inline-block;
  margin-bottom: .5rem;
  font-size: 14px;
`

type Props = {
  value: string | undefined
}

const FieldLabel: FC<Props> = props => {
  return (
    <Label>{ props.value }</Label>
  )
};

export default FieldLabel;
