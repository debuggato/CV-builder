import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import i18n from '../../../i18n';

import {
  Container,
  FullName,
  JobTitle,
  Sidebar,
  Email,
  Address,
  Phone,
  Main,
  Description,
  Header,
  Title,
} from './DaVinci.style';

const DaVinci: FC = (props: any): ReactElement => {
  const getFormattedAddress = (): string => {
    return props.getAddress
      ? `${props.getAddress} - ${props.getPostalCode} ${props.getCity}, ${props.getCountry}`
      : '';
  };

  const getPhone = (): string => {
    return props.getPhone ? `${props.getPhone}` : '';
  };

  const getFullName = (): string => {
    return `${props.getFirstName} ${props.getLastName}`;
  };

  return (
    <Container>
      <Header border={props.getJobTitle}>
        {getFullName() &&
          <FullName>{getFullName()}</FullName>
        }
        {props.getJobTitle &&
          <JobTitle>{props.getJobTitle}</JobTitle>
        }
      </Header>
      <Sidebar>
        {props.getEmail && getFormattedAddress() && getPhone() &&
          <h3>{i18n.t('contact_information')}</h3>
        }
        {props.getEmail &&
          <Email>
            {i18n.t('email')}: <strong>{props.getEmail}</strong>
          </Email>
        }
        {getFormattedAddress() &&
          <Address>
            {i18n.t('address')}: <strong>{getFormattedAddress()}</strong>
          </Address>
        }
        {getPhone() &&
          <Phone>
            {i18n.t('phone')}: <strong>{getPhone()}</strong>
          </Phone>
        }
      </Sidebar>
      <Main>
        {props.getJobDescription &&
          <div>
            <Title>{i18n.t('about_me')}</Title>
            <Description dangerouslySetInnerHTML={{ __html: props.getJobDescription }} />
          </div>
        }
      </Main>
    </Container>
  );
};

/* interface ReduxState {
  getJobTitle: string;
  getFirstName: string;
  getLastName: string;
  getEmail: string;
  getPhone: number;
  getCity: string;
  getCountry: string;
  getPostalCode: number;
  getAddress: string;
  getDrivingLicense: string;
  getNationality: string;
  getPlaceOfBirth: string;
  getDateOfBirth: Date;
  getJobDescription: string;
} */

const mapStateToProps = (state: any) => {
  const {
    jobTitle,
    firstName,
    lastName,
    email,
    phone,
    city,
    country,
    postalCode,
    address,
    drivingLicense,
    nationality,
    placeOfBirth,
    dateOfBirth,
  } = state.personalDetails;

  const { summary } = state.summary;

  return {
    getJobTitle: jobTitle,
    getFirstName: firstName,
    getLastName: lastName,
    getEmail: email,
    getPhone: phone,
    getCity: city,
    getCountry: country,
    getPostalCode: postalCode,
    getAddress: address,
    getDrivingLicense: drivingLicense,
    getNationality: nationality,
    getPlaceOfBirth: placeOfBirth,
    getDateOfBirth: dateOfBirth,
    getJobDescription: summary,
  };
};

export default connect(mapStateToProps, null)(DaVinci);
