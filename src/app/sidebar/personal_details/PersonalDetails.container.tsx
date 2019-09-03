import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'

import i18n from '../../../i18n'

import Button from '../../../components/buttons/Button.view'
import Title from '../../../components/Title.view'

import mapDispatchToProps from './duck/dispatch'
import Props from './PersonalDetails.model'
import AdditionalDetails from './AdditionalDetails.view'
import MainDetails from './MainDetails.view'
import {
  Container,
  Details
} from './PersonalDetails.style'

type State = {
  isOpen: boolean
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

  onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {

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
      case 'drivingLicense':
        this.props.sendDrivingLicenseToStore(value)
        break;
      case 'nationality':
        this.props.sendNationalityToStore(value)
        break;
      case 'placeOfBirth':
        this.props.sendPlaceOfBirthToStore(value)
        break;
      case 'dateOfBirth':
        this.props.sendDateOfBirthToStore(value)
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
        <Details isVisible={ true }>
          <MainDetails onInputChange={ this.onInputChange }/>
        </Details>
        <Button
          typology="link"
          onClick={this.clickShowAdditionalDetails}
        >
          {i18n.t('edit_additional_details')}
        </Button>
        <Details isVisible={ isOpen }>
          <AdditionalDetails onInputChange={ this.onInputChange } />
        </Details>
      </Container>
    )
  }
}

export default connect(null, mapDispatchToProps)(PersonalDetails)