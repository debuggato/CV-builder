import React, { Component } from 'react'
import { connect } from 'react-redux';
import i18n from '../../../i18n'

import * as action from '../../../store/actions'
import Input from '../../../components/input/Input.view'
import LinkAccordion from '../../../components/LinkAccordion.view'
import Title from '../../../components/Title.view'

import {
  Wrapper,
  MainDetails,
  AdditionalDetails
} from './PersonalDetails.style'

interface State {
  isOpen: boolean
}

interface Props {
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
      default: break;
    }
  }

  render() {

    const { isOpen } = this.state

    return (
      <Wrapper>
        <Title>{i18n.t('personal_details')}</Title>
        <MainDetails>
          <Input
            type="text"
            withLabel={true}
            label="Job Title"
            name="jobTitle"
            onChange={this.onInputChange}
          />
          <Input
            type="file"
            withLabel={true}
            label="Upload Photo"
          />
          <Input
            type="text"
            withLabel={true}
            label="First Name"
            name="firstName"
            onChange={this.onInputChange}
          />
          <Input
            type="text"
            withLabel={true}
            label="Last Name"
            name="lastName"
            onChange={this.onInputChange}
          />
          <Input
            type="text"
            withLabel={true}
            label="Phone"
            name="phone"
            onChange={this.onInputChange}
          />
          <Input
            type="email"
            withLabel={true}
            label="Email"
            name="email"
            onChange={this.onInputChange}
          />
        </MainDetails>
        <LinkAccordion
          onClick={this.clickShowAdditionalDetails}
          label="Edit additional details"
          isOpen={isOpen}
        />
        <AdditionalDetails isVisible={isOpen}>
          <Input
            type="text"
            withLabel={true}
            label="Country"
            name="country"
            onChange={this.onInputChange}
          />
          <Input
            type="text"
            withLabel={true}
            label="City"
            name="city"
            onChange={this.onInputChange}
          />
          <Input
            type="text"
            withLabel={true}
            label="Address"
            name="address"
            onChange={this.onInputChange}
          />
          <Input
            type="text"
            withLabel={true}
            label="Postal code"
            name="postalCode"
            onChange={this.onInputChange}
          />
          <Input
            type="text"
            withLabel={true}
            label="Driving License"
            name="drivingLicense"
            onChange={this.onInputChange}
          />
          <Input
            type="text"
            withLabel={true}
            label="Nationality"
            name="nationality"
            onChange={this.onInputChange}
          />
          <Input
            type="text"
            withLabel={true}
            label="Place of birth"
            name="placeOfBirth"
            onChange={this.onInputChange}
          />
          <Input
            type="text"
            withLabel={true}
            label="Date of birth"
            name="dateOfBirth"
            onChange={this.onInputChange}
          />
        </AdditionalDetails>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    sendJobTitleToStore: (value: string) => {
      dispatch(action.setJobTitle(value))
    },
    sendFirstNameToStore: (value: string) => {
      dispatch(action.setFirstname(value))
    },
    sendLastNameToStore: (value: string) => {
      dispatch(action.setLastname(value))
    },
    sendCityToStore: (value: string) => {
      dispatch(action.setCity(value))
    },
    sendEmailToStore: (value: string) => {
      dispatch(action.setEmail(value))
    },
    sendPhoneToStore: (value: string) => {
      dispatch(action.setPhone(value))
    },
    sendCountryToStore: (value: string) => {
      dispatch(action.setCountry(value))
    },
    sendAddressToStore: (value: string) => {
      dispatch(action.setAddress(value))
    },
    sendPostalCodeToStore: (value: string) => {
      dispatch(action.setPostalCode(value))
    },
    sendDrivingLicenseToStore: (value: string) => {
      dispatch(action.setDrivingLicense(value))
    },
    sendNationalityToStore: (value: string) => {
      dispatch(action.setNationality(value))
    },
    sendPlaceOfBirthToStore: (value: string) => {
      dispatch(action.setPlaceOfBirth(value))
    }
  }
}

export default connect(null, mapDispatchToProps)(PersonalDetails)