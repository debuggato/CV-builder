import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TextEditor from '@components/text_editor/TextEditor.view';
import Input from '@components/input/Input.view';
import RangePicker from '@components/datepicker/RangePicker.view';
import { Wrapper } from '@components/accordion/Accordion.style';
import * as action from './duck/Education.actions';

interface OwnProps {
  id: number;
}

interface DispatchProps {
  setSchool: (arg0: number, arg1: string) => void;
  setDegree: (arg0: number, arg1: string) => void;
  setCity: (arg0: number, arg1: string) => void;
  setDescription: (arg0: number, arg1: string) => void;
  setDateFrom: (arg0: number, arg1: Date) => void;
  setDateTo: (arg0: number, arg1: Date) => void;
}

interface StateProps {
  items: any;
}

type Props = OwnProps & DispatchProps & StateProps;

const EducationView: FC<Props> = (props: Props): ReactElement => {
  const {
    id,
    setSchool,
    setCity,
    setDescription,
    setDegree,
    setDateFrom,
    setDateTo,
  } = props;

  const { school, degree, city, description } = props.items[id];

  return (
    <>
      <Wrapper>
        <Input
          type="text"
          label="School"
          onChange={e => setSchool(id, e.target.value)}
          value={school}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Degree"
          onChange={e => setDegree(id, e.target.value)}
          value={degree}
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
        <TextEditor
          onChange={e => setDescription(id, e)}
          value={description}
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

const mapStateToProps = (state: any) => ({
  items: state.education
});

export default connect(mapStateToProps, mapDispatchToProps)(EducationView);
