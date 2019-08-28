import { CSSProperties, ChangeEvent } from 'react'

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

export default Props