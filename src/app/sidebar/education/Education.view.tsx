import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import Input from 'components/input/Input.view';
import FromToDate from 'components/FromToDate.view';
import { Wrapper } from 'components/accordion/Accordion.style';

import mapDispatchToProps from './duck/dispatch';
import { ReduxProps } from './duck/model';

interface OwnProps {
  id: number;
};

interface Props extends OwnProps, ReduxProps { }

const EducationView: FC<Props> = ({ id, setSchool, setCity, setDescription, setDegree }: Props): ReactElement => {
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
      <FromToDate />
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

export default connect(null, mapDispatchToProps)(EducationView);
