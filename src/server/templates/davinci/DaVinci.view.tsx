import React, { FC, ReactElement } from 'react';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { DetailsState } from '@sidebar/details/duck/Details.model';
import { SummaryState } from '@sidebar/summary/duck/Summary.model';
import ContactType from '@components/template/ContactType.view';
import Description from '@components/template/Description.view';
import StoryItem from '@components/template/StoryItem.view';

import {
  Container,
  FullName,
  JobTitle,
  Sidebar,
  Main,
  Header,
  WhoIam,
  ContactDetails
} from './DaVinci.style';

interface Props extends DetailsState, SummaryState {
  employments?: any;
}

const DaVinci: FC<Props> = (props: Props): ReactElement => {

  const {
    address,
    postalCode,
    city,
    country,
    phone,
    firstName,
    lastName,
    jobTitle,
    description,
    email,
    employments,
    photo,
  } = props;

  const employment = employments.map((el: any) => {
    return <StoryItem
      key={el[0]}
      title={el[1].jobTitle}
      entity={el[1].employer}
      city={el[1].city}
      dateFrom={el[1].dateFrom}
      dateTo={el[1].dateTo}
      description={el[1].description} />;
  });

  return (
    <Container>
      <Header border={jobTitle}>
        <WhoIam>
          <FullName>{firstName + ' ' + lastName}</FullName>
          {jobTitle && <JobTitle>{jobTitle}</JobTitle>}
        </WhoIam>
        {photo && <img src={photo} width="100" height="80" />}
        <ContactDetails>
          <ContactType
            icon={faPhone}
            bold={false}
            contact={phone}
          />
          <ContactType
            icon={faEnvelope}
            bold={false}
            contact={email}
          />
          <ContactType
            icon={faMapMarkerAlt}
            bold={false}
            contact={address + ', ' + postalCode + ' ' + city + ' ' + country}
          />
        </ContactDetails>
      </Header>
      <Sidebar>
      </Sidebar>
      <Main>
        <Description label="about_me" text={description} />
        {employment}
      </Main>
    </Container>
  );
};

export default DaVinci;
