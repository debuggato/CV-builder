import React, { FC, Fragment, ChangeEvent } from 'react';

import Input from '../../../components/input/Input.view';
import FromToDate from '../../../components/FromToDate.view';

import { Wrapper } from '../accordion_details/AccordionDetails.style';

type Props = {
  onTitleSectionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription: (value: string) => void;
  text: string;
};

const EducationView: FC<Props> = props => {
  return (
    <Fragment>
      <Wrapper>
        <Input type="text" withLabel={true} label="School" onChange={props.onTitleSectionChange} />
      </Wrapper>
      <Wrapper>
        <Input type="text" withLabel={true} label="Degree" />
      </Wrapper>
      <Wrapper>
        <Input type="text" withLabel={true} label="City" />
      </Wrapper>
      <FromToDate />
      <Wrapper>
        <Input
          type="textarea"
          withLabel={true}
          label="Description"
          name="description"
          onChange={props.onChangeDescription}
          text={props.text}
        />
      </Wrapper>
    </Fragment>
  );
};

export default EducationView;
