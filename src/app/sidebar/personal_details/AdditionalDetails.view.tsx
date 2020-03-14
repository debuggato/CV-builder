import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import Input from 'components/input/Input.view';

import { Wrapper } from './PersonalDetails.style';
import mapDispatchToProps from './duck/dispatch';
import { ReduxProps } from './duck/model';

const AdditionalDetails: FC<ReduxProps> = (props: ReduxProps): ReactElement => {
  const {
    setAddress,
    setCity,
    setCountry,
    setDateOfBirth,
    setDrivingLicense,
    setNationality,
    setPlaceOfBirth,
    setPostalCode
  } = props;

  return (
    <>
      <Wrapper>
        <Input
          type="text"
          label="Country"
          onChange={e => setCountry(e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="City"
          onChange={e => setCity(e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Address"
          onChange={e => setAddress(e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Postal code"
          onChange={e => setPostalCode(parseInt(e.target.value))}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Driving License"
          onChange={e => setDrivingLicense(e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Nationality"
          onChange={e => setNationality(e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Place of birth"
          onChange={e => setPlaceOfBirth(e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Date of birth"
          onChange={e => setDateOfBirth(new Date(e.target.value))}
        />
      </Wrapper>
    </>
  );
};

export default connect(null, mapDispatchToProps)(AdditionalDetails);
