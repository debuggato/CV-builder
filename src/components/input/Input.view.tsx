import React, {
  FC,
  CSSProperties,
  ChangeEvent,
  Fragment
} from 'react'

import { Input } from './Input.style'

interface Props {
  type: string,
  label?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  style?: CSSProperties,
  defaultValue?: string,
  value?: string,
  name?: string,
  readOnly?: boolean,
  withLabel?: boolean,
  id?: string
}

const InputView: FC<Props> = props => {
  return (
    <Fragment>
      {
        props.withLabel ? <label>{ props.label }</label> : null
      }
      <Input
        type={ props.type }
        placeholder={ props.label }
        onChange={ props.onChange }
        style={ props.style }
        defaultValue={ props.defaultValue }
        value={ props.value }
        name={ props.name }
        readOnly={ props.readOnly }
        id={ props.id }
      />
    </Fragment>
  )
}

export default InputView