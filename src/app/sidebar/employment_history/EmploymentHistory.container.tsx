import React, { Component } from 'react'
import { connect } from 'react-redux'

import Input from '../../../components/input/Input.view'
import Textarea from '../../../components/textarea/Textarea.view'
import LinkAccordion from '../../../components/LinkAccordion.view'
import Title from '../../../components/Title.view'
import Subtitle from '../../../components/Subtitle.view'

import mapDispatchToProps from './duck/dispatch'

import {
  Container,
  DetailsToFill,
  Wrapper
} from './EmploymentHistory.style'

interface State {
  isOpen: boolean,
  text: string
}

interface Props {
  currentStep: number
}

class EmploymentHistory extends Component<Props, State> {
  state = {
    isOpen: false,
    text: ''
  }

  clickShowDetailsToFill = (): void => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onChangeDescription = (value: any): void => {
    this.setState({
      text: value
    })
  }

  render() {

    if (this.props.currentStep !== 3) {
      return null;
    }

    const { isOpen } = this.state

    return (
      <Container>
        <Title>Employment History</Title>
        <Subtitle>Include your last 10 years of relevant experience and dates in this section. List your most recent position first.</Subtitle>
        <DetailsToFill isVisible={ isOpen }>
          <Wrapper>
            <Input
              type="text"
              withLabel={ true }
              label="Job Title"
              name="jobTitle"
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={ true }
              label="Employer"
              name="employer"
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={ true }
              label="City"
              name="city"
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={ true }
              label="Start & End date"
              name="startDate"
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={ false }
              label="End date"
              name="endDate"
            />
          </Wrapper>
        </DetailsToFill>
        <Textarea
          isVisible={ isOpen }
          withLabel={ true }
          label="Description"
          name="description"
          onChange={ this.onChangeDescription }
          text={ this.state.text }
        />
        <LinkAccordion
          onClick={ this.clickShowDetailsToFill }
          label="Add education"
          isOpen={ isOpen }
        />
      </Container>
    )
  }
}

export default connect(null, mapDispatchToProps)(EmploymentHistory)
