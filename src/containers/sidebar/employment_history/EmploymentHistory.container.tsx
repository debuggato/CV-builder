import React, { Component } from 'react'

import Input from '../../../components/input/Input.view'
import Textarea from '../../../components/textarea/Textarea.view'
import LinkAccordion from '../../../components/LinkAccordion.view'
import Title from '../../../components/Title.view'
import Subtitle from '../../../components/Subtitle.view'

import {
  Wrapper,
  DetailsToFill
} from './EmploymentHistory.style'

interface State {
  isOpen: boolean
}

export default class EmploymentHistory extends Component<{}, State> {
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
        <Title>Employment History</Title>
        <Subtitle>Include your last 10 years of relevant experience and dates in this section. List your most recent position first.</Subtitle>
        <DetailsToFill isVisible={ isOpen }>
          <Input type="text" withLabel={ true } label="Job Title" />
          <Input type="text" withLabel={ true } label="Employer" />
          <Input type="text" withLabel={ true } label="City" />
          <Input type="text" withLabel={ true } label="Start & End date" />
          <Input type="text" withLabel={ false } label="End date" />
        </DetailsToFill>
        <Textarea
          isVisible={ isOpen }
          withLabel={ true }
          label="Description"
        />
        <LinkAccordion onClick={ this.clickShowDetailsToFill } label="Add education" isOpen={ isOpen } />
      </Wrapper>
    )
  }
}
