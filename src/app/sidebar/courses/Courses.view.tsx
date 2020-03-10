import React, { FC, ChangeEvent } from 'react';

import Input from '../../../components/input/Input.view';
import FromToDate from '../../../components/FromToDate.view';

import { Wrapper } from '../../../components/accordion/Accordion.style';

interface Props {
  //onTitleSectionChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CoursesView: FC<Props> = props => {
  return (
    <>
      <Wrapper>
        <Input type="text" label="Course" />
      </Wrapper>
      <Wrapper>
        <Input type="text" label="Institution" />
      </Wrapper>
      <FromToDate />
    </>
  );
};

export default CoursesView;
