import React, { Component, Fragment } from 'react'

import Input from '../../../components/input/Input.view'
import Title from '../../../components/Title.view'

import {
  Wrapper,
  MainDetails,
  LinkDetails,
  AdditionalDetails
} from './ExternalLinks.style'

type State {
  showAdditionalDetails: boolean
}

export default class ExternalLinks extends Component<{}, State> {

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
          <Title>Websites & Social links</Title>
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
