import React, { Component } from 'react'
import { connect } from 'react-redux';
import i18n from '../../../i18n'

import mapDispatchToProps from './duck/dispatch'

import Input from '../../../components/input/Input.view'
import LinkAccordion from '../../../components/LinkAccordion.view'
import Title from '../../../components/Title.view'

import {
  Container,
  Wrapper,
  MainDetails,
  AdditionalDetails
} from './PersonalDetails.style'

interface State {
  isOpen: boolean
}

interface Props {
  currentStep: number,
  sendJobTitleToStore: (arg0: string) => void,
  sendFirstNameToStore: (arg0: string) => void,
  sendLastNameToStore: (arg0: string) => void,
  sendCityToStore: (arg0: string) => void,
  sendAddressToStore: (arg0: string) => void,
  sendPostalCodeToStore: (arg0: string) => void,
  sendPhoneToStore: (arg0: string) => void,
  sendEmailToStore: (arg0: string) => void,
  sendCountryToStore: (arg0: string) => void
}

class PersonalDetails extends Component<Props, State> {

  state = {
    isOpen: false
  }

  clickShowAdditionalDetails = (): void => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onInputChange = (e: any): void => {

    let
      name: string = e.target.name,
      value: string = e.target.value

    switch (name) {
      case 'jobTitle':
        this.props.sendJobTitleToStore(value)
        break;
      case 'firstName':
        this.props.sendFirstNameToStore(value)
        break;
      case 'lastName':
        this.props.sendLastNameToStore(value)
        break;
      case 'city':
        this.props.sendCityToStore(value)
        break;
      case 'postalCode':
        this.props.sendPostalCodeToStore(value)
        break;
      case 'phone':
        this.props.sendPhoneToStore(value)
        break;
      case 'email':
        this.props.sendEmailToStore(value)
        break;
      case 'country':
        this.props.sendCountryToStore(value)
        break;
      case 'address':
        this.props.sendAddressToStore(value)
        break;
      default: break;
    }
  }

  render() {

    if (this.props.currentStep !== 1) {
      return null;
    } 

    const { isOpen } = this.state

    return (
      <Container>
        <Title>{i18n.t('personal_details')}</Title>
        <MainDetails>
          <Wrapper>
            <Input
              type="text"
              withLabel={true}
              label="Job Title"
              name="jobTitle"
              onChange={this.onInputChange}
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="file"
              withLabel={true}
              label="Upload Photo"
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={true}
              label="First Name"
              name="firstName"
              onChange={this.onInputChange}
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={true}
              label="Last Name"
              name="lastName"
              onChange={this.onInputChange}
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={true}
              label="Phone"
              name="phone"
              onChange={this.onInputChange}
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="email"
              withLabel={true}
              label="Email"
              name="email"
              onChange={this.onInputChange}
            />
          </Wrapper>
        </MainDetails>
        <LinkAccordion
          onClick={this.clickShowAdditionalDetails}
          label="Edit additional details"
          isOpen={isOpen}
        />
        <AdditionalDetails isVisible={isOpen}>
          <Wrapper>
            <Input
              type="text"
              withLabel={true}
              label="Country"
              name="country"
              onChange={this.onInputChange}
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={true}
              label="City"
              name="city"
              onChange={this.onInputChange}
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={true}
              label="Address"
              name="address"
              onChange={this.onInputChange}
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={true}
              label="Postal code"
              name="postalCode"
              onChange={this.onInputChange}
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={true}
              label="Driving License"
              name="drivingLicense"
              onChange={this.onInputChange}
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={true}
              label="Nationality"
              name="nationality"
              onChange={this.onInputChange}
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={true}
              label="Place of birth"
              name="placeOfBirth"
              onChange={this.onInputChange}
            />
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              withLabel={true}
              label="Date of birth"
              name="dateOfBirth"
              onChange={this.onInputChange}
            />
          </Wrapper>
        </AdditionalDetails>
      </Container>
    )
  }
}

export default connect(null, mapDispatchToProps)(PersonalDetails)