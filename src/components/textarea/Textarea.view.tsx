import React, { CSSProperties, FC } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import Props from './Textarea.model'
import FieldLabel from '../FieldLabel.view'

const styleEditor: CSSProperties = {
  height: '200px',
  width: '100%'
}

const Textarea: FC<Props> = props => {
  return (
    <div>
      {
        props.withLabel ? <FieldLabel value={ props.label } /> : null
      }
      <ReactQuill
        value={ props.text }
        onChange={ props.onChange }
        style={ styleEditor }
      />
    </div>
  )
}

export default Textarea