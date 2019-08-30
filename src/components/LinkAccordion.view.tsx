import React, { FC } from 'react'
import styled, { CSSProperties } from 'styled-components'

import Icon from './Icon.view'

type Props = {
  onClick: () => void,
  label: string,
  isOpen: boolean
}

const Link = styled.a`
  cursor: pointer;
  margin: 15px 0;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`

const iconStyle: CSSProperties = {
    fontSize: '23px',
    position: 'relative',
    top: '3px',
    left: '10px'
}

const LinkAccordionView: FC<Props> = props => {
  return (
    <Link onClick={ props.onClick }>
      { props.label }
      <Icon
        icon={ `${ props.isOpen ? 'arrow-dropup' : 'arrow-dropdown' }` }
        style={ iconStyle }
      />
    </Link>
  )
}

export default LinkAccordionView
