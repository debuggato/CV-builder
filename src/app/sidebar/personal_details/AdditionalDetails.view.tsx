import React, { FC, ChangeEvent, Fragment } from 'react'

import Input from '../../../components/input/Input.view'

import { Wrapper } from './PersonalDetails.style'

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void
}

const AdditionalDetails: FC<Props> = props => {
  return (
    <Fragment>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Country"
          name="country"
          onChange={ props.onChange }
          onBlur={ props.onBlur }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="City"
          name="city"
          onChange={ props.onChange }
          onBlur={ props.onBlur }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Address"
          name="address"
          onChange={ props.onChange }
          onBlur={ props.onBlur }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Postal code"
          name="postalCode"
          onChange={ props.onChange }
          onBlur={ props.onBlur }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Driving License"
          name="drivingLicense"
          onChange={ props.onChange }
          onBlur={ props.onBlur }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Nationality"
          name="nationality"
          onChange={ props.onChange }
          onBlur={ props.onBlur }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Place of birth"
          name="placeOfBirth"
          onChange={ props.onChange }
          onBlur={ props.onBlur }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Date of birth"
          name="dateOfBirth"
          onChange={ props.onChange }
          onBlur={ props.onBlur }
        />
      </Wrapper>
    </Fragment>
  )
}

export default AdditionalDetails
