import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  children: string
}

export const Title = styled.h3`

`

const TitleView: FC<Props> = props => {
  return (
    <Title>{ props.children }</Title>
  )
}

export default TitleView
