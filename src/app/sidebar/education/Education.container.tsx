import React, { Component } from 'react'

import Input from '../../../components/input/Input.view'
import Textarea from '../../../components/textarea/Textarea.view'
import LinkAccordion from '../../../components/LinkAccordion.view'
import Title from '../../../components/Title.view'
import Subtitle from '../../../components/Subtitle.view'
import FromToDate from '../../../components/FromToDate.view'

import {
  Container,
  Wrapper,
  DetailsToFill
} from './Education.style'

interface State {
  isOpen: boolean,
  text: string
}

interface Props {
  currentStep: number
}

class Education extends Component<Props, State> {

  state = {
    isOpen: false,
    text: ''
  }

  clickShowDetailsToFill = (): void => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onDescriptionChange = (value: any): void => {
    this.setState({
      text: value 
    })
  }

  render() {

    if (this.props.currentStep !== 4) {
      return null;
    }

    const { isOpen } = this.state

    return (
      <Container>
        <Title>Education</Title>
        <Subtitle>If relevant, include your most recent education achievements and the dates here</Subtitle>
        <DetailsToFill isVisible={ isOpen }>
          <Wrapper>
            <Input
              type="text"
              withLabel={ true }
              label="School"
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={ true }
              label="Degree"
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={ true }
              label="City"
            />
          </Wrapper>
          <FromToDate />
          <Wrapper>
            <Textarea
              withLabel={ true }
              label="Description"
              name="description"
              onChange={ this.onDescriptionChange }
              text={ this.state.text }
            />
          </Wrapper>
        </DetailsToFill>
        <LinkAccordion
          onClick={ this.clickShowDetailsToFill }
          label="Add education"
          isOpen={ isOpen }
        />
      </Container>
    )
  }
}

export default Education
