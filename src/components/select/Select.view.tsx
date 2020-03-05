import React, { FC, ChangeEvent } from 'react';

import { Select } from './Select.style';

interface Model {
  list: string[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectView: FC<Model> = props => {
  const items = props.list.map((item: string, key: number) => (
    <option key={key} value={key}>
      {item}
    </option>
  ));

  return <Select onChange={props.onChange}>{items}</Select>;
};

export default SelectView;
