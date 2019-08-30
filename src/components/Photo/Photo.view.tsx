import React, { FC } from 'react'

import Input from '../input/Input.view'
import FieldLabel from '../FieldLabel.view'
import Icon from '../Icon.view'

import {
  Container,
  Wrapper,
  IconContainer,
  UploadLabel
} from './Photo.style'

const iconStyle = {
  marginRight: '10px'
}

const Photo: FC = () => {
  return (
    <Container>
      <FieldLabel value="Upload Photo" />
      <Wrapper>
        <img src="" alt="" />
        <IconContainer>
          <Icon icon="contact" />
        </IconContainer>

        <label htmlFor="upload">
          <UploadLabel>
            <Icon icon="image" style={ iconStyle }></Icon>
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
