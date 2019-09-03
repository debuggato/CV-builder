import React, { FC, ChangeEvent, Fragment } from 'react'

import Input from '../../../components/input/Input.view'

import { Wrapper, Container } from './PersonalDetails.style'

type Props = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
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
          onChange={ props.onInputChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="City"
          name="city"
          onChange={ props.onInputChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Address"
          name="address"
          onChange={ props.onInputChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Postal code"
          name="postalCode"
          onChange={ props.onInputChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Driving License"
          name="drivingLicense"
          onChange={ props.onInputChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Nationality"
          name="nationality"
          onChange={ props.onInputChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Place of birth"
          name="placeOfBirth"
          onChange={ props.onInputChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Date of birth"
          name="dateOfBirth"
          onChange={ props.onInputChange }
        />
      </Wrapper>
    </Fragment>
  )
}

export default AdditionalDetails
