import React, { FC, ChangeEvent } from 'react';

import Input from '../../../components/input/Input.view';
import FromToDate from '../../../components/FromToDate.view';

import { Wrapper } from '../../../components/accordion/Accordion.style';

interface Props {
  //onTitleSectionChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const EducationView: FC<Props> = props => {
  return (
    <>
      <Wrapper>
        <Input type="text" label="School" />
      </Wrapper>
      <Wrapper>
        <Input type="text" label="Degree" />
      </Wrapper>
      <Wrapper>
        <Input type="text" label="City" />
      </Wrapper>
      <FromToDate />
      <Wrapper>
        <Input
          type="textarea"
          label="Description"
        />
      </Wrapper>
    </>
  );
};

export default EducationView;
