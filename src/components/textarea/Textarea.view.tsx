import React, { CSSProperties, Fragment, FC } from 'react'

import { Textarea, Wrapper } from './Textarea.style'

interface Props {
  placeholder: string,
  label?: string,
  style?: CSSProperties,
  withLabel?: boolean
}

const TextareaView: FC<Props> = props => {
  return (
    <Wrapper>
      {
        props.withLabel ? <label>{ props.label }</label> : null
      }
      <Textarea
        placeholder={ props.placeholder }
        style={ props.style }
      />
    </Wrapper>
  )
}

export default TextareaView