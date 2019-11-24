import React, { FC, ChangeEvent } from 'react';

import { Select } from './Select.style';

type Props = {
  list: string[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectView: FC<Props> = props => {
  const items = props.list.map((item: string, key: number) => (
    <option key={key} value={key}>
      {item}
    </option>
  ));

  return <Select onChange={props.onChange}>{items}</Select>;
};

export default SelectView;
