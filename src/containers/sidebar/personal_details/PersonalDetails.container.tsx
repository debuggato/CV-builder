import React, { Component, Fragment, ChangeEvent } from 'react'
import { connect } from 'react-redux';
import i18n from '../../../i18n'

import { changeJobTitle, changeFirstname } from '../../../store/actions'
import Input from '../../../components/input/Input.view'
import LinkAccordion from '../../../components/LinkAccordion.view'
import Title from '../../../components/Title.view'

import {
  Wrapper,
  MainDetails,
  AdditionalDetails
} from './PersonalDetails.style'

interface State {
  isOpen: boolean
}

interface Props {
  sendJobTitleToStore: (e: ChangeEvent<HTMLInputElement>) => void,
  sendFirstNameToStore: (e: ChangeEvent<HTMLInputElement>) => void
}

class PersonalDetails extends Component<Props, State> {

  state = {
    isOpen: false
  }

  clickShowAdditionalDetails = (): void => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onInputChange = (e: any): void => {
    switch (e.target.name) {
      case 'jobTitle':
        this.props.sendJobTitleToStore(e.target.value)
      break;
      case 'firstName':
        this.props.sendFirstNameToStore(e.target.value)
    }
  }

  render() {

    const { isOpen } = this.state

    return (
      <Fragment>
        <Wrapper>
          <Title>{ i18n.t('personal_details') }</Title>
          <MainDetails>
            <Input
              type="text"
              withLabel={ true }
              label="Job Title"
              name="jobTitle"
              onChange={ this.onInputChange }
            />
            <Input
              type="file"
              withLabel={ true }
              label="Upload Photo"
            />
            <Input
              type="text"
              withLabel={ true }
              label="First Name"
              name="firstName"
              onChange={ this.onInputChange }
            />
            <Input
              type="text"
              withLabel={ true }
              label="Last Name"
              name="lastName"
              onChange={ this.onInputChange }
            />
            <Input
              type="text"
              withLabel={ true }
              label="Phone"
              name="phone"
              onChange={ this.onInputChange }
            />
            <Input
              type="email"
              withLabel={ true }
              label="Email"
              name="email"
              onChange={ this.onInputChange }
            />
          </MainDetails>
          <LinkAccordion
            onClick={ this.clickShowAdditionalDetails }
            label="Edit additional details"
            isOpen={ isOpen }
          />
          <AdditionalDetails isVisible={ isOpen }>
            <Input type="text" withLabel={ true } label="Country" />
            <Input type="text" withLabel={ true } label="City" />
            <Input type="text" withLabel={ true } label="Adress" />
            <Input type="text" withLabel={ true } label="Postal code" />
            <Input type="text" withLabel={ true } label="Driving License" />
            <Input type="text" withLabel={ true } label="Nationality" />
            <Input type="text" withLabel={ true } label="Place of birth" />
            <Input type="text" withLabel={ true } label="Date of birth" />
          </AdditionalDetails>
        </Wrapper>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    sendJobTitleToStore: (value: any) => {
      dispatch(changeJobTitle(value))
    },
    sendFirstNameToStore: (value: any) => {
      dispatch(changeFirstname(value))
    },
  }
}

export default connect(null, mapDispatchToProps)(PersonalDetails)