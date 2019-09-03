 type Props = {
  currentStep: number,
  sendJobTitleToStore: (arg0: string) => void,
  sendFirstNameToStore: (arg0: string) => void,
  sendLastNameToStore: (arg0: string) => void,
  sendCityToStore: (arg0: string) => void,
  sendAddressToStore: (arg0: string) => void,
  sendPostalCodeToStore: (arg0: string) => void,
  sendPhoneToStore: (arg0: string) => void,
  sendEmailToStore: (arg0: string) => void,
  sendCountryToStore: (arg0: string) => void,
  sendDrivingLicenseToStore: (arg0: string) => void,
  sendNationalityToStore: (arg0: string) => void,
  sendPlaceOfBirthToStore: (arg0: string) => void,
  sendDateOfBirthToStore: (arg0: string) => void
}

export default Props