import React, { FC, Fragment, ChangeEvent } from 'react';

import Input from '../../../components/input/Input.view';
import FromToDate from '../../../components/FromToDate.view';

import { Wrapper } from '../accordion_details/AccordionDetails.style';

interface Props {
  onTitleSectionChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CoursesView: FC<Props> = props => {
  return (
    <Fragment>
      <Wrapper>
        <Input type="text" withLabel={true} label="Course" onChange={props.onTitleSectionChange} />
      </Wrapper>
      <Wrapper>
        <Input type="text" withLabel={true} label="Institution" />
      </Wrapper>
      <FromToDate />
    </Fragment>
  );
};

export default CoursesView;
