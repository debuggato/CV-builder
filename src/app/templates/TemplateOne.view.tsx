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

  const getAddress = (): string => {
    return props.getAddress ? `${props.getAddress} - ${props.getPostalCode} ${props.getCity}, ${props.getCountry}` : ''
  }

  const getPhone = (): string => {
    return props.getPhone ? `${props.getPhone}` : ''
  }

  const getEmail = (): string => {
    return props.getEmail ? `${props.getEmail}` : ''
  }

  const getFullName = (): string => {
    return props.getFirstName + ' ' + props.getLastName
  }

  return (
    <Container>
      <Header>
        <FullName>{ getFullName() }</FullName>
        <JobTitle>{ props.getJobTitle }</JobTitle>
      </Header>
      <Sidebar>
        <h3>{ i18n.t("contact_information") }</h3>
        <Email>{ i18n.t("email") }: <strong>{ getEmail() }</strong></Email>
        <Address>
          { i18n.t("address") }: <strong>{ getAddress() }</strong>
        </Address>
        <Phone>{ i18n.t("phone") }: <strong>{ getPhone() }</strong></Phone>
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