import React, { FC, useState, ReactElement } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import FieldLabel from '../FieldLabel.view';
import InputStyle from '../input/Input.style';

import { Wrapper, Container } from './Datepicker.style';

interface Props {
  label: string;
  onChangeDateFrom: (arg0: Date) => void;
  onChangeDateTo: (arg0: Date) => void;
}

const DatepickerCustom = InputStyle.withComponent(DatePicker);

const FromToDate: FC<Props> = ({ label, onChangeDateFrom, onChangeDateTo }: Props): ReactElement => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onSetDateFrom = (date: Date) => {
    setStartDate(date);
    onChangeDateFrom(date);
  }

  const onSetDateTo = (date: Date) => {
    setEndDate(date);
    onChangeDateTo(date);
  }

  return (
    <Container>
      <FieldLabel value={label} />
      <Wrapper>
        <DatepickerCustom
          selected={startDate}
          onChange={(date: Date) => onSetDateFrom(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
        <DatepickerCustom
          selected={endDate}
          onChange={(date: Date) => onSetDateTo(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
      </Wrapper>
    </Container>
  );
};

export default FromToDate;
