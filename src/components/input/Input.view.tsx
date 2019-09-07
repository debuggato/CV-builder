import React, {
  FC,
  Fragment,
  CSSProperties
} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import Props from './Input.model'
import Input from './Input.style'
import FieldLabel from '../FieldLabel.view'

const InputView: FC<Props> = props => {

  const styleEditor: CSSProperties = {
    width: '100%'
  }

  return (
    <Fragment>
      {
        props.withLabel ? <FieldLabel value={props.label} /> : null
      }
      { props.type === 'textarea' ?
        <ReactQuill
          value={props.text}
          onChange={props.onChange}
          style={styleEditor}
        />
      :
        <Input
          type={props.type}
          placeholder={props.label}
          onChange={props.onChange}
          style={props.style}
          defaultValue={props.defaultValue}
          value={props.value}
          name={props.name}
          readOnly={props.readOnly}
          id={props.id}
        />
      }
    </Fragment>
  )
}

export default InputView