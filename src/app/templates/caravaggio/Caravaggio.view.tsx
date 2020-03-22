import React, { ReactNode, PureComponent } from 'react';
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
} from './Caravaggio.style';

interface OwnProps { }

interface StateProps {
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  city: string;
  country: string;
  postalCode: number;
  address: string;
  drivingLicense: string;
  nationality: string;
  placeOfBirth: string;
  dateOfBirth: Date;
  summary: string;
}

type Props = OwnProps & StateProps;

class Caravaggio extends PureComponent<Props, {}> {
  render(): ReactNode {
    const { address, postalCode, city, country, phone, firstName, lastName, jobTitle, summary, email } = this.props;

    const getFormattedAddress = (): string => {
      return address
        ? `${address} - ${postalCode} ${city}, ${country}`
        : '';
    };

    const getPhone = (): string => {
      return phone ? `${phone}` : '';
    };

    const getFullName = (): string => {
      return `${firstName} ${lastName}`;
    };

    return (
      <Container>
        CARAVAGGIO
        <Header border={jobTitle}>
          {getFullName() && <FullName>{getFullName()}</FullName>}
          {jobTitle && <JobTitle>{jobTitle}</JobTitle>}
        </Header>
        <Sidebar>
          {email && getFormattedAddress() && getPhone() &&
            <h3>{i18n.t('contact_information')}</h3>
          }
          {email && <Email>{i18n.t('email')}: <strong>{email}</strong></Email>}
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
          {summary &&
            <div>
              <Title>{i18n.t('about_me')}</Title>
              <Description dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
          }
        </Main>
      </Container>
    );
  }
};

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
  } = state.details;

  const { summary } = state.summary;

  return {
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
    summary,
  };
};

export default connect(mapStateToProps, {})(Caravaggio);
