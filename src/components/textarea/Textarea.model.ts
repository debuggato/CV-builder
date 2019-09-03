import { ChangeEvent } from 'react'

type Props = {
  label?: string,
  withLabel: boolean,
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  name: string,
  text: string
}

export default Props