import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  onClick: () => void,
  label: string,
  isOpen: boolean
}

export const Link = styled.a`
  cursor: pointer;
  margin: 15px 0;
  display: block;

  &:hover {
    text-decoration: underline;
  }

  i {
    font-size: 23px;
    position: relative;
    top: 3px;
    left: 10px;
  }
`

const LinkView: FC<Props> = props => {
  return (
    <Link onClick={ props.onClick }>
      { props.label }
      <i className={ `ion-md-arrow-${ props.isOpen ? 'dropup' : 'dropdown' }` }></i>
    </Link>
  )
}

export default LinkView
