import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Wrapper } from '@components/accordion/Accordion.style';

import Input from '@components/input/Input.view';
import RangePicker from '@components/datepicker/RangePicker.view';
import * as action from './duck/Employment.actions';

interface OwnProps {
  id: number;
};

interface DispatchProps {
  setJobTitle: (arg0: number, arg1: string) => void;
  setEmployer: (arg0: number, arg1: string) => void;
  setCity: (arg0: number, arg1: string) => void;
  setDescription: (arg0: number, arg1: string) => void;
  setDateFrom: (arg0: number, arg1: Date) => void;
  setDateTo: (arg0: number, arg1: Date) => void;
}

interface StateProps {
  items: any;
}

type Props = OwnProps & DispatchProps & StateProps;

const EmploymentView: FC<Props> = (props: Props): ReactElement => {
  const {
    id,
    setJobTitle,
    setEmployer,
    setCity,
    setDescription,
    setDateFrom,
    setDateTo
  } = props;

  const { jobTitle, employer, city, description } = props.items[id];

  return (
    <>
      <Wrapper>
        <Input
          type="text"
          label="Job Title"
          onChange={e => setJobTitle(id, e.target.value)}
          value={jobTitle}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Employer"
          onChange={e => setEmployer(id, e.target.value)}
          value={employer}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="City"
          onChange={e => setCity(id, e.target.value)}
          value={city}
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
          value={description}
        />
      </Wrapper>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setJobTitle: (id, value) => {
    dispatch(action.setJobTitleAction(id, value));
  },
  setEmployer: (id, value) => {
    dispatch(action.setEmployerAction(id, value));
  },
  setCity: (id, value) => {
    dispatch(action.setCityAction(id, value));
  },
  setDateFrom: (id, value) => {
    dispatch(action.setDateFromAction(id, value));
  },
  setDateTo: (id, value) => {
    dispatch(action.setDateToAction(id, value));
  },
  setDescription: (id, value) => {
    dispatch(action.setDescriptionAction(id, value));
  },
});

const mapStateToProps = (state: any) => ({
  items: state.employment
});

export default connect(mapStateToProps, mapDispatchToProps)(EmploymentView);
