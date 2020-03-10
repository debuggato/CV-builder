import React, { FC, ChangeEvent } from 'react';

import Photo from '../../../components/photo/Photo.view';
import Input from '../../../components/input/Input.view';

import { Wrapper } from './PersonalDetails.style';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MainDetails: FC<Props> = props => {
  return (
    <>
      <Photo />
      <Wrapper>
        <Input
          type="text"
          label="Job Title"
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="First Name"
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Last Name"
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Phone"
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="email"
          label="Email"
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </Wrapper>
    </>
  );
};

export default MainDetails;
