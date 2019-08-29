import React, { FC } from 'react'

import Input from '../input/Input.view'
import FieldLabel from '../FieldLabel.view'

import {
  Container,
  Wrapper,
  IconContainer,
  UploadLabel
} from './Photo.style'

const Photo: FC = () => {
  return (
    <Container>
      <FieldLabel value="Upload Photo" />
      <Wrapper>
        <img src="" alt="" />
        <IconContainer>
          <i className="ion-md-contact" />
        </IconContainer>

        <label htmlFor="upload">
          <UploadLabel>
            <i className="ion-md-image"></i>
            Upload Photo
          </UploadLabel>
          <Input
            type="file"
            withLabel={ false }
            id="upload"
          />
        </label>
      </Wrapper>
    </Container>
  )
};

export default Photo;
