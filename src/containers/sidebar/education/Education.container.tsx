import React, { Component } from 'react'

import Input from '../../../components/input/Input.view'
import Textarea from '../../../components/textarea/Textarea.view'
import LinkAccordion from '../../../components/LinkAccordion.view'
import Title from '../../../components/Title.view'
import Subtitle from '../../../components/Subtitle.view'

import {
  Wrapper,
  DetailsToFill
} from './Education.style'

interface State {
  isOpen: boolean
}

export default class Education extends Component<{}, State> {
  state = {
    isOpen: false
  }

  clickShowDetailsToFill = (): void => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {

    const { isOpen } = this.state

    return (
      <Wrapper>
        <Title>Education</Title>
        <Subtitle>If relevant, include your most recent education achievements and the dates here</Subtitle>
        <LinkAccordion onClick={ this.clickShowDetailsToFill } label="Add education" isOpen={ isOpen } />
        <DetailsToFill isVisible={ isOpen }>
          <Input type="text" withLabel={ true } label="School" />
          <Input type="text" withLabel={ true } label="Degree" />
          <Input type="text" withLabel={ true } label="City" />
          <Input type="text" withLabel={ true } label="Start & End date" />
          <Input type="text" withLabel={ false } label="End date" />
        </DetailsToFill>
        <Textarea
          isVisible={ isOpen }
          withLabel={ true }
          label="Description"
        />
      </Wrapper>
    )
  }
}
