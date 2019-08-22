import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Document, Page } from 'react-pdf'

import { Wrapper, PageWrapper, Actions } from './Resume.style'
import TemplateOneView from './templates/TemplateOne.view';
import Button from '../../components/buttons/Button.view';

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

class Resume extends Component<Props> {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = (numPages: any) => {
    this.setState({ numPages });
  }

  onClickDownload = () => {

  }

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
      getDateOfBirth,
      getPlaceOfBirth
    } = this.props

    const { pageNumber, numPages } = this.state;

    const dataFromState: object = {
      getJobTitle: getJobTitle,
      getFirstName: getFirstName,
      getLastName: getLastName,
      getEmail: getEmail,
      getPhone: getPhone,
      getPostalCode: getPostalCode,
      getCity: getCity,
      getAddress: getAddress,
      getDateOfBirth: getDateOfBirth,
      getPlaceOfBirth: getPlaceOfBirth
    }

    return (
      <Wrapper>
        <PageWrapper>
          <TemplateOneView {...dataFromState} />
          {/* <Document
            file="CV.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          > */}
          {/* <Page pageNumber={pageNumber} /> */}
        {/* </Document> */}
        {/* <p>Page {pageNumber} of {numPages}</p> */}
        </PageWrapper>
        <Actions>
          <Button onClick={ this.onClickDownload } label="Download" />
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
