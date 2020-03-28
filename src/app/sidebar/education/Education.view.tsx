import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Input from 'components/input/Input.view';
import RangePicker from 'components/datepicker/RangePicker.view';
import { Wrapper } from 'components/accordion/Accordion.style';
import * as action from './duck/Education.actions';

interface OwnProps {
  id: number;
};

interface DispatchProps {
  setSchool: (arg0: number, arg1: string) => void;
  setDegree: (arg0: number, arg1: string) => void;
  setCity: (arg0: number, arg1: string) => void;
  setDescription: (arg0: number, arg1: string) => void;
  setDateFrom: (arg0: number, arg1: Date) => void;
  setDateTo: (arg0: number, arg1: Date) => void;
};

type Props = OwnProps & DispatchProps;

const EducationView: FC<Props> = (props: Props): ReactElement => {
  const {
    id,
    setSchool,
    setCity,
    setDescription,
    setDegree,
    setDateFrom,
    setDateTo
  } = props;

  return (
    <>
      <Wrapper>
        <Input
          type="text"
          label="School"
          onChange={e => setSchool(id, e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Degree"
          onChange={e => setDegree(id, e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="City"
          onChange={e => setCity(id, e.target.value)}
        />
      </Wrapper>
      <RangePicker
        label="From to date"
        onChangeDateFrom={date => setDateFrom(id, new Date(date))}
        onChangeDateTo={date => setDateTo(id, new Date(date))}
      />
      <Wrapper>
        <Input
          type="textarea"
          label="Description"
          onChange={e => setDescription(id, e.target.value)}
        />
      </Wrapper>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setSchool: (id, value) => {
    dispatch(action.setSchool(id, value));
  },
  setDegree: (id, value) => {
    dispatch(action.setDegree(id, value));
  },
  setCity: (id, value) => {
    dispatch(action.setCity(id, value));
  },
  setDescription: (id, value) => {
    dispatch(action.setDescription(id, value));
  },
  setDateFrom: (id, value) => {
    dispatch(action.setDateFrom(id, value));
  },
  setDateTo: (id, value) => {
    dispatch(action.setDateTo(id, value));
  },
});

export default connect(null, mapDispatchToProps)(EducationView);
