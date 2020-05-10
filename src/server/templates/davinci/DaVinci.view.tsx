import React, { FC, ReactElement } from 'react';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { DetailsState } from '@sidebar/details/duck/Details.model';
import { SummaryState } from '@sidebar/summary/duck/Summary.model';
import ContactType from '@components/template/ContactType.view';
import Description from '@components/template/Description.view';
import StoryItem from '@components/template/StoryItem.view';
import TitleView from '@components/Title.view';
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
import { useTranslation } from 'react-i18next';

interface Props extends DetailsState, SummaryState {
  employments: Object;
  education: Object;
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
    education,
    photo,
  } = props;

  const { t } = useTranslation();


  console.log(employments)

  return (
    <Container>
      <Header border={jobTitle}>
        <WhoIam>
          <FullName>{`${firstName} ${lastName}`}</FullName>
          {jobTitle && <JobTitle>{jobTitle}</JobTitle>}
        </WhoIam>
        {photo && <img src={photo} width="100" height="80" />}
        <ContactDetails>
          <ContactType
            icon={faPhone}
            value={phone}
          />
          <ContactType
            icon={faEnvelope}
            value={email}
          />
          <ContactType
            icon={faMapMarkerAlt}
            value={`${address ? address + ', ' + postalCode + ' ' + city + ' ' + country : ''}`}
          />
        </ContactDetails>
      </Header>
      <Sidebar>
        {getEducationHistory(education)}
      </Sidebar>
      <Main>
        {description && <Description label="about.me" text={description} />}
        <TitleView>{t('experience')}</TitleView>
        {getEmploymentHistory(employments)}
      </Main>
    </Container>
  );
};

const getEmploymentHistory = (employments: any) => {
  return employments.map((el: any) => {
    return <StoryItem
      key={el[0]}
      title={el[1].jobTitle}
      entity={el[1].employer}
      city={el[1].city}
      dateFrom={el[1].dateFrom}
      dateTo={el[1].dateTo}
      description={el[1].description} />;
  });
}

const getEducationHistory = (education: any) => {
  return education.map((el: any) => {
    return <StoryItem
      key={el[0]}
      title={el[1].degree}
      entity={el[1].school}
      city={el[1].city}
      dateFrom={el[1].dateFrom}
      dateTo={el[1].dateTo}
      description={el[1].description} />;
  });
}

export default DaVinci;
