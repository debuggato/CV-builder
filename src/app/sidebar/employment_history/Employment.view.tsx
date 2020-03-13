import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import { Wrapper } from 'components/accordion/Accordion.style';
import mapDispatchToProps from './duck/dispatch';
import { ReduxProps } from './duck/model';

import Input from 'components/input/Input.view';
import FromToDate from 'components/FromToDate.view';

interface OwnProps {
  id: number;
};

interface Props extends OwnProps, ReduxProps { }

const EmploymentView: FC<Props> = ({ id, setJobTitle, setEmployer, setCity, setDescription }: Props): ReactElement => {

  return (
    <>
      <Wrapper>
        <Input
          type="text"
          label="Job Title"
          onChange={e => setJobTitle(id, e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Employer"
          onChange={e => setEmployer(id, e.target.value)}
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
          text={''}
        />
      </Wrapper>
    </>
  );
};

export default connect(null, mapDispatchToProps)(EmploymentView);
