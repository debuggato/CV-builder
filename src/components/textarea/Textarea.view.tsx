import React, { CSSProperties, FC } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import FieldLabel from '../FieldLabel.view'

interface Props {
  label?: string,
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