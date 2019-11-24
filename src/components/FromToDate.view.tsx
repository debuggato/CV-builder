import React, { FC, useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import FieldLabel from './FieldLabel.view';
import InputStyle from '../components/input/Input.style';

const Container = styled.div`
  margin: 10px 0;
`;

const Wrapper = styled.div`
  display: flex;

  input:first-child {
    margin-right: 10px;
  }
`;

const DatepickerCustom = InputStyle.withComponent(DatePicker);

const FromToDate: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Container>
      <FieldLabel value="Start & End date" />
      <Wrapper>
        <DatepickerCustom
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
        <DatepickerCustom
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
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
