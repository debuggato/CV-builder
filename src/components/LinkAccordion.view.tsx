import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  onClick: () => void,
  label: string
}

export const Link = styled.a`
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    text-decoration: underline;
  }
`

const LinkView: FC<Props> = props => {
  return (
    <Link onClick={ props.onClick }>{ props.label }</Link>
  )
}

export default LinkView
