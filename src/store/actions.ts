import * as constants from './constants'

export const setJobTitle = (value: string) => ({
  type: constants.SET_JOB_TITLE,
  payload: value
})

export const setFirstname = (value: string) => ({
  type: constants.SET_FIRST_NAME,
  payload: value
})

export const setLastname = (value: string) => ({
  type: constants.SET_LAST_NAME,
  payload: value
})

export const setCity = (value: string) => ({
  type: constants.SET_CITY,
  payload: value
})

export const setAddress = (value: string) => ({
  type: constants.SET_ADDRESS,
  payload: value
})

export const setCountry = (value: string) => ({
  type: constants.SET_COUNTRY,
  payload: value
})

export const setDateOfBirth = (value: string) => ({
  type: constants.SET_DATE_OF_BIRTH,
  payload: value
})

export const setDrivingLicense = (value: string) => ({
  type: constants.SET_DRIVING_LICENSE,
  payload: value
})

export const setEmail = (value: string) => ({
  type: constants.SET_EMAIL,
  payload: value
})

export const setNationality = (value: string) => ({
  type: constants.SET_NATIONALITY,
  payload: value
})

export const setPlaceOfBirth = (value: string) => ({
  type: constants.SET_PLACE_OF_BIRTH,
  payload: value
})

export const setPostalCode = (value: string) => ({
  type: constants.SET_POSTAL_CODE,
  payload: value
})

export const setPhone = (value: string) => ({
  type: constants.SET_PHONE,
  payload: value
})