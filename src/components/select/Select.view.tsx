import React, { FC, ChangeEvent, ReactElement } from 'react';

import { Select } from './Select.style';

interface OwnProps {
  list: Object;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectView: FC<OwnProps> = ({ list, onChange }: OwnProps): ReactElement => {
  const items = Object.values(list).map((obj, index) => {
    return <option key={index} value={Object.keys(obj)}>{Object.values(obj)}</option>
  });

  return <Select onChange={onChange}>{items}</Select>;
};

export default SelectView;
