import React, { FC, ChangeEvent, ReactElement } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Select, Wrapper } from './Select.style';
import IconView from '@components/Icon.view';

interface Props {
  list: Object;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const iconStyle = {
  position: 'absolute',
  right: '5px'
}

const SelectView: FC<Props> = ({ list, onChange }: Props): ReactElement => {
  const items = Object.values(list).map((obj, index) => {
    return <option key={index} value={Object.keys(obj)}>{Object.values(obj)}</option>
  });

  return (
    <Wrapper>
      <Select onChange={onChange}>{items}</Select>
      <IconView icon={faChevronDown} style={iconStyle} />
    </Wrapper>
  );
};

export default SelectView;
