import React, { Component, Fragment } from 'react'

import Input from '../../../components/input/Input.view'

import {
  Wrapper,
  Title,
  MainDetails,
  LinkDetails,
  AdditionalDetails
} from './ProfessionalSummary.style'

interface State {
  showAdditionalDetails: boolean
}

export default class PersonalDetails extends Component<{}, State> {

  state = {
    showAdditionalDetails: false
  }

  clickShowAdditionalDetails = () => {
    this.setState({
      showAdditionalDetails: !this.state.showAdditionalDetails
    })
  }

  render() {

    const { showAdditionalDetails } = this.state

    return (
      <Fragment>
        <Wrapper>
          <Title>Professional Summary</Title>
          <MainDetails>
            <Input type="text" withLabel={ true } label="Job Title" />
            <Input type="file" withLabel={ true } label="Upload Photo" />
            <Input type="text" withLabel={ true } label="First Name" />
            <Input type="text" withLabel={ true } label="Last Name" />
            <Input type="text" withLabel={ true } label="Phone" />
            <Input type="email" withLabel={ true } label="Email" />
          </MainDetails>
        </Wrapper>
      </Fragment>
    )
  }
}
