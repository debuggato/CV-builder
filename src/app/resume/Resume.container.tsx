import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer'

import { Wrapper, PageWrapper, Actions } from './Resume.style'
import TemplateOneView from './templates/TemplateOne.view'
import Button from '../../components/buttons/Button.view'
import FilePDF from './PDF/PDF.view'

interface Props {
  getJobTitle: string,
  getFirstName: string,
  getLastName: string,
  getEmail: string,
  getPhone: string,
  getPostalCode: string,
  getCity: string,
  getCountry: string,
  getPlaceOfBirth: string,
  getDateOfBirth: string,
  getAddress: string
}

class Resume extends Component<Props, {}> {

  render() {

    const {
      getJobTitle,
      getFirstName,
      getLastName,
      getEmail,
      getPhone,
      getPostalCode,
      getCity,
      getAddress,
      getCountry,
      getDateOfBirth,
      getPlaceOfBirth
    } = this.props

    const dataFromState: object = {
      getJobTitle: getJobTitle,
      getFirstName: getFirstName,
      getLastName: getLastName,
      getEmail: getEmail,
      getPhone: getPhone,
      getPostalCode: getPostalCode,
      getCity: getCity,
      getAddress: getAddress,
      getCountry: getCountry,
      getDateOfBirth: getDateOfBirth,
      getPlaceOfBirth: getPlaceOfBirth
    }

    return (
      <Wrapper>
        <PageWrapper>
          <TemplateOneView {...dataFromState} />
        </PageWrapper>
        <Actions>
          <PDFDownloadLink document={<FilePDF { ...dataFromState } />} fileName="CV.pdf">
            {({ loading, error }) => (loading ? 'Loading document...' : 'Download')}
          </PDFDownloadLink>
        </Actions>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state: any) => {

  const  {
    jobTitle,
    firstName,
    lastName,
    email,
    phone,
    city,
    country,
    postalCode,
    address,
    dateOfBirth,
    placeOfBirth
  } = state.personalDetails

	return {
    getJobTitle: jobTitle,
    getFirstName: firstName,
    getLastName: lastName,
    getCity: city,
    getAddress: address,
    getEmail: email,
    getPhone: phone,
    getCountry: country,
    getPostalCode: postalCode,
    getDateOfBirth: dateOfBirth,
    getPlaceOfBirth: placeOfBirth
  }
}

export default connect(mapStateToProps, null)(Resume)
