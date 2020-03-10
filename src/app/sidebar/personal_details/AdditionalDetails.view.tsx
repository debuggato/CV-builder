import React, { FC, ChangeEvent } from 'react';

import Input from '../../../components/input/Input.view';

import { Wrapper } from './PersonalDetails.style';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AdditionalDetails: FC<Props> = props => {
  return (
    <>
      <Wrapper>
        <Input
          type="text"
          label="Country"
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="City"
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Address"
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Postal code"
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Driving License"
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Nationality"
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Place of birth"
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Date of birth"
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </Wrapper>
    </>
  );
};

export default AdditionalDetails;
