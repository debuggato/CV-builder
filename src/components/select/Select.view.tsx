import React, { FC } from 'react'

import { Select } from './Select.style'

interface Props {
  list: string[]
}

const SelectView: FC<Props> = props => {

  const items = props.list.map((item: string, key: number) =>
    <option key={ key } value={ key }>{ item }</option>
  )

  return (
    <Select>{ items }</Select>
  )
}

export default SelectView