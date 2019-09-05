import React, { FC } from 'react'

import i18n from '../../i18n'

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
  Title
} from './TemplateOne.style'

const TemplateOne: FC = (props: any) => {
  return (
    <Container>
      <Header>
        <FullName>{ props.getFirstName + ' ' + props.getLastName}</FullName>
        <JobTitle>{ props.getJobTitle }</JobTitle>
      </Header>
      <Sidebar>
        <h3>{ i18n.t("contact_information") }</h3>
        <Email>{ props.getEmail ? `E-mail: ${props.getEmail}` : ''}</Email>
        <Address>
        { props.getAddress ? `Address: ${props.getAddress} - ` : ''}
        { `${props.getPostalCode} ${props.getCity}, ${props.getCountry}` }
        </Address>
        <Phone>{ props.getPhone ? `Phone: ${props.getPhone}` : ''}</Phone>
        <Title>{ i18n.t("education") }</Title>
        <Title>{ i18n.t("langs") }</Title>
        <Title>{ i18n.t("skills") }</Title>
      </Sidebar>
      <Main>
        <Title>{ i18n.t("about_me") }</Title>
        <Description dangerouslySetInnerHTML={{ __html: props.getJobDescription }} />
      </Main>
    </Container>
  )
}

export default TemplateOne