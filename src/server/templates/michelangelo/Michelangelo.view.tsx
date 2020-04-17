import React, { ReactNode, PureComponent } from 'react';

import trans from '../../../client/i18n';

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
} from './Michelangelo.style';

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

class Michelangelo extends PureComponent<Props, {}> {
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
        <Header border={jobTitle}>
          {getFullName() && <FullName>{getFullName()}</FullName>}
          {jobTitle && <JobTitle>{jobTitle}</JobTitle>}
        </Header>
        <Sidebar>
          {email && getFormattedAddress() && getPhone() &&
            <h3>{trans.t('contact_information')}</h3>
          }
          {email && <Email>{trans.t('email')}: <strong>{email}</strong></Email>}
          {getFormattedAddress() &&
            <Address>
              {trans.t('address')}: <strong>{getFormattedAddress()}</strong>
            </Address>
          }
          {getPhone() &&
            <Phone>
              {trans.t('phone')}: <strong>{getPhone()}</strong>
            </Phone>
          }
        </Sidebar>
        <Main>
          {summary &&
            <div>
              <Title>{trans.t('about_me')}</Title>
              <Description dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
          }
        </Main>
      </Container>
    );
  }
};

export default Michelangelo;
