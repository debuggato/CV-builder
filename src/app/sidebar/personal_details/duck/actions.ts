import * as type from './types'

export const setJobTitle = (value: string) => ({
  type: type.SET_JOB_TITLE,
  payload: value
})

export const setFirstname = (value: string) => ({
  type: type.SET_FIRST_NAME,
  payload: value
})

export const setLastname = (value: string) => ({
  type: type.SET_LAST_NAME,
  payload: value
})

export const setCity = (value: string) => ({
  type: type.SET_CITY,
  payload: value
})

export const setAddress = (value: string) => ({
  type: type.SET_ADDRESS,
  payload: value
})

export const setCountry = (value: string) => ({
  type: type.SET_COUNTRY,
  payload: value
})

export const setDateOfBirth = (value: string) => ({
  type: type.SET_DATE_OF_BIRTH,
  payload: value
})

export const setDrivingLicense = (value: string) => ({
  type: type.SET_DRIVING_LICENSE,
  payload: value
})

export const setEmail = (value: string) => ({
  type: type.SET_EMAIL,
  payload: value
})

export const setNationality = (value: string) => ({
  type: type.SET_NATIONALITY,
  payload: value
})

export const setPlaceOfBirth = (value: string) => ({
  type: type.SET_PLACE_OF_BIRTH,
  payload: value
})

export const setPostalCode = (value: string) => ({
  type: type.SET_POSTAL_CODE,
  payload: value
})

export const setPhone = (value: string) => ({
  type: type.SET_PHONE,
  payload: value
})