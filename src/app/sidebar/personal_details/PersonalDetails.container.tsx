import React, { Component, ChangeEvent, ReactNode } from 'react';
import { connect } from 'react-redux';

import i18n from '../../../i18n';

import Button from '../../../components/buttons/Button.view';
import Title from '../../../components/Title.view';
import Loader from '../../../components/loader/Loader.view';

import mapDispatchToProps from './duck/dispatch';
import Props from './PersonalDetails.model';
import AdditionalDetails from './AdditionalDetails.view';
import MainDetails from './MainDetails.view';
import { Container, Details } from './PersonalDetails.style';
import Icon from 'components/Icon.view';

type State = {
  isOpen: boolean;
};

class PersonalDetails extends Component<Props, State> {
  state = {
    isOpen: false,
  };

  clickShowAdditionalDetails = (): void => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let name: string = e.target.name,
      value: string = e.target.value;

    switch (name) {
      case 'jobTitle':
        this.props.sendJobTitleToStore(value);
        break;
      case 'firstName':
        this.props.sendFirstNameToStore(value);
        break;
      case 'lastName':
        this.props.sendLastNameToStore(value);
        break;
      case 'city':
        this.props.sendCityToStore(value);
        break;
      case 'postalCode':
        this.props.sendPostalCodeToStore(value);
        break;
      case 'phone':
        this.props.sendPhoneToStore(value);
        break;
      case 'email':
        this.props.sendEmailToStore(value);
        break;
      case 'country':
        this.props.sendCountryToStore(value);
        break;
      case 'address':
        this.props.sendAddressToStore(value);
        break;
      case 'drivingLicense':
        this.props.sendDrivingLicenseToStore(value);
        break;
      case 'nationality':
        this.props.sendNationalityToStore(value);
        break;
      case 'placeOfBirth':
        this.props.sendPlaceOfBirthToStore(value);
        break;
      case 'dateOfBirth':
        this.props.sendDateOfBirthToStore(value);
        break;
      default:
        break;
    }
  };

  onBlur = (e: ChangeEvent<HTMLInputElement>): void => {
    let name: string = e.target.name,
      value: string = e.target.value;

    let data: object = {};

    switch (name) {
      case 'jobTitle':
        data = {
          jobTitle: value,
        };
        break;
      case 'firstName':
        data = {
          firstName: value,
        };
        break;
      case 'lastName':
        data = {
          lastName: value,
        };
        break;
      case 'city':
        data = {
          city: value,
        };
        break;
      case 'postalCode':
        data = {
          postalCode: value,
        };
        break;
      case 'phone':
        data = {
          phone: value,
        };
        break;
      case 'email':
        data = {
          email: value,
        };
        break;
      case 'country':
        data = {
          country: value,
        };
        break;
      case 'address':
        data = {
          address: value,
        };
        break;
      case 'drivingLicense':
        data = {
          drivingLicense: value,
        };
        break;
      case 'nationality':
        data = {
          nationality: value,
        };
        break;
      case 'placeOfBirth':
        data = {
          placeOfBirth: value,
        };
        break;
      case 'dateOfBirth':
        data = {
          dataOfBirth: value,
        };
        break;
      default:
        break;
    }
  };

  showLoader = () => {
    return <Loader withLabel={true} loading={true} />;
  };

  render(): ReactNode {
    if (this.props.currentStep !== 1) {
      return null;
    }

    const { isOpen } = this.state;

    return (
      <Container>
        <Title>{i18n.t('personal_details')}</Title>
        <Details isVisible={true}>
          <MainDetails onChange={this.onChange} onBlur={this.onBlur} />
        </Details>
        <Button typology="link" onClick={this.clickShowAdditionalDetails} color="primary">
          {i18n.t('edit_additional_details')}
          <Icon icon={isOpen ? 'arrow-dropup' : 'arrow-dropdown'} />
        </Button>
        <Details isVisible={isOpen}>
          <AdditionalDetails onChange={this.onChange} onBlur={this.onBlur} />
        </Details>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(PersonalDetails);
