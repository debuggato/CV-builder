import React, { Component, Fragment } from 'react'
import i18n from '../../../i18n'

import Input from '../../../components/input/Input.view'
import LinkAccordion from '../../../components/LinkAccordion.view'
import Title from '../../../components/Title.view'

import {
  Wrapper,
  MainDetails,
  AdditionalDetails
} from './PersonalDetails.style'

interface State {
  showAdditionalDetails: boolean,
  isOpen: boolean
}

class PersonalDetails extends Component<{}, State> {

  state = {
    showAdditionalDetails: false,
    isOpen: false
  }

  clickShowAdditionalDetails = (): void => {
    this.setState({
      showAdditionalDetails: !this.state.showAdditionalDetails,
      isOpen: !this.state.isOpen
    })
  }

  render() {

    const { showAdditionalDetails, isOpen } = this.state

    return (
      <Fragment>
        <Wrapper>
          <Title>{ i18n.t('personal_details') }</Title>
          <MainDetails>
            <Input type="text" withLabel={ true } label="Job Title" />
            <Input type="file" withLabel={ true } label="Upload Photo" />
            <Input type="text" withLabel={ true } label="First Name" />
            <Input type="text" withLabel={ true } label="Last Name" />
            <Input type="text" withLabel={ true } label="Phone" />
            <Input type="email" withLabel={ true } label="Email" />
          </MainDetails>
          <LinkAccordion
            onClick={ this.clickShowAdditionalDetails }
            label="Edit additional details"
            isOpen={ isOpen }
          />
          <AdditionalDetails isVisible={ showAdditionalDetails }>
            <Input type="text" withLabel={ true } label="Country" />
            <Input type="text" withLabel={ true } label="City" />
            <Input type="text" withLabel={ true } label="Adress" />
            <Input type="text" withLabel={ true } label="Postal code" />
            <Input type="text" withLabel={ true } label="Driving License" />
            <Input type="text" withLabel={ true } label="Nationality" />
            <Input type="text" withLabel={ true } label="Place of birth" />
            <Input type="text" withLabel={ true } label="Date of birth" />
          </AdditionalDetails>
        </Wrapper>
      </Fragment>
    )
  }
}

export default PersonalDetails