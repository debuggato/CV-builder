import React, { FC, Fragment, ChangeEvent } from 'react';

import Photo from '../../../components/photo/Photo.view'
import Input from '../../../components/input/Input.view'

import { Wrapper } from './PersonalDetails.style'

interface Props {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const MainDetails: FC<Props> = props => {
  return (
    <Fragment>
      <Photo />
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Job Title"
          name="jobTitle"
          onChange={ props.onInputChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="First Name"
          name="firstName"
          onChange={ props.onInputChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Last Name"
          name="lastName"
          onChange={ props.onInputChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Phone"
          name="phone"
          onChange={ props.onInputChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="email"
          withLabel={true}
          label="Email"
          name="email"
          onChange={ props.onInputChange }
        />
      </Wrapper>
    </Fragment>
  )
}

export default MainDetails;
