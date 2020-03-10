import React, { FC, ChangeEvent, ReactElement, FocusEvent } from 'react';

import { Wrapper } from '../../../components/accordion/Accordion.style';

import Input from '../../../components/input/Input.view';
import FromToDate from '../../../components/FromToDate.view';

interface Props {
  //onTitleSectionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  //text: string;
};

const EmploymentView: FC<Props> = ({ onChange, onFocus }: Props): ReactElement => {
  return (
    <>
      <Wrapper>
        <Input
          type="text"
          label="Job Title"
          name="jobTitle"
          onChange={onChange}
          onFocus={onFocus}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Employer"
          onChange={onChange}
        />
      </Wrapper>
      <Wrapper>
        <Input type="text" label="City" onChange={onChange} />
      </Wrapper>
      <FromToDate />
      <Wrapper>
        <Input
          type="textarea"
          label="Description"
          onChange={onChange}
          text={''}
        />
      </Wrapper>
    </>
  );
};

export default EmploymentView;
