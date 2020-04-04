import React, { FC, useState, ReactElement } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import FieldLabel from '../FieldLabel.view';
import InputStyle from '../input/Input.style';

import { Wrapper, Container } from './Datepicker.style';

interface Props {
  value: string;
  label: string;
  onChange: (date: Date) => void;
}

const DatepickerCustom = InputStyle.withComponent(DatePicker);

const FromToDate: FC<Props> = ({ label, onChange, value }: Props): ReactElement => {
  const [startDate, setDate] = useState(new Date());

  const onSetDate = (date: Date) => {
    setDate(date);
    onChange(date);
  }

  return (
    <Container>
      <FieldLabel value={label} />
      <Wrapper>
        <DatepickerCustom
          selected={startDate}
          onChange={(date: Date) => onSetDate(date)}
          selectsStart
          startDate={startDate}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          value={value}
        />
      </Wrapper>
    </Container>
  );
};

export default FromToDate;
