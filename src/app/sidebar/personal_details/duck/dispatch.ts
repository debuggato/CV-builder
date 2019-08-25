import * as action from './actions'

const mapDispatchToProps = (dispatch: any) => {
  return {
    sendJobTitleToStore: (value: string) => {
      dispatch(action.setJobTitle(value))
    },
    sendFirstNameToStore: (value: string) => {
      dispatch(action.setFirstname(value))
    },
    sendLastNameToStore: (value: string) => {
      dispatch(action.setLastname(value))
    },
    sendCityToStore: (value: string) => {
      dispatch(action.setCity(value))
    },
    sendEmailToStore: (value: string) => {
      dispatch(action.setEmail(value))
    },
    sendPhoneToStore: (value: string) => {
      dispatch(action.setPhone(value))
    },
    sendCountryToStore: (value: string) => {
      dispatch(action.setCountry(value))
    },
    sendAddressToStore: (value: string) => {
      dispatch(action.setAddress(value))
    },
    sendPostalCodeToStore: (value: string) => {
      dispatch(action.setPostalCode(value))
    },
    sendDrivingLicenseToStore: (value: string) => {
      dispatch(action.setDrivingLicense(value))
    },
    sendNationalityToStore: (value: string) => {
      dispatch(action.setNationality(value))
    },
    sendPlaceOfBirthToStore: (value: string) => {
      dispatch(action.setPlaceOfBirth(value))
    }
  }
}

export default mapDispatchToProps