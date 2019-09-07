import { CSSProperties, ChangeEvent } from 'react'

type Props = {
  type: string,
  label?: string,
  onChange?: (e: any) => void,
  style?: CSSProperties,
  defaultValue?: string,
  value?: string,
  name?: string,
  readOnly?: boolean,
  withLabel?: boolean,
  id?: string,
  text?: string
}

export default Props