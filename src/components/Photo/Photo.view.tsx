import React, { FC } from 'react'

import Input from '../input/Input.view'
import FieldLabel from '../FieldLabel.view'

import {
  Container,
  Wrapper,
  IconContainer
} from './Photo.style' 

const Photo: FC = () => {
  return (
    <Container>
      <FieldLabel value="Upload Photo" />
      <Wrapper>
        <img src="" />
        <IconContainer>
          <i className="ion-md-contact" />
        </IconContainer>
        <Input
          type="file"
          withLabel={ false }
        />
      </Wrapper>
    </Container>
  )
};

export default Photo;
