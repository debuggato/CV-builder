import React, { Component, Fragment } from 'react'

import Input from '../../../components/input/Input.view'
import Title from '../../../components/Title.view'
import Subtitle from '../../../components/Subtitle.view'

import {
  Container,
  Wrapper
} from './ExternalLinks.style'

type State = {

}

type Props = {
  currentStep: number
}

export default class ExternalLinks extends Component<Props, State> {

  state = {
    
  }

  render() {

    if (this.props.currentStep !== 6) {
      return null;
    }

    return (
      <Container>
        <Title>Websites & Social links</Title>
        <Subtitle>You can add links to websites like your portfolio, Lineding profile or personal website</Subtitle>
        <Wrapper>
          <Input
            type="text"
            withLabel={ true }
            label="Label"
            name="label"
          />
        </Wrapper>
        <Wrapper>
          <Input
            type="text"
            withLabel={ true }
            label="Link"
            name="link"
          />
        </Wrapper>
      </Container>
    )
  }
}
