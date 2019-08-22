import React, { FC } from 'react'
import styled from 'styled-components'

import colors from '../styles/color.style'

interface Props {
  children: string
}

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  border-bottom: 1px solid ${ colors.grey };
  padding-bottom: 3px;
`

const TitleView: FC<Props> = props => {
  return (
    <Title>{ props.children }</Title>
  )
}

export default TitleView
