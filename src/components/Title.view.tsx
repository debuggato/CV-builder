import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  children: string
}

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 10px;
`

const TitleView: FC<Props> = props => {
  return (
    <Title>{ props.children }</Title>
  )
}

export default TitleView
