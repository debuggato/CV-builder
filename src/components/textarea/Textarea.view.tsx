import React, { CSSProperties, FC } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { Wrapper } from './Textarea.style'

interface Props {
  label?: string,
  isVisible?: boolean,
  withLabel: boolean,
  onChange: (e: any) => void,
  name: string,
  text: string
}

const styleEditor: CSSProperties = {
  height: '200px',
  width: '100%'
}

const Textarea: FC<Props> = (props: any) => {
  return (
    <Wrapper isVisible={ props.isVisible }>
      {
        props.withLabel ? <label>{ props.label }</label> : null
      }
      <ReactQuill
        value={ props.text }
        onChange={ props.onChange }
        style={ styleEditor }
      />
    </Wrapper>
  )
}

export default Textarea