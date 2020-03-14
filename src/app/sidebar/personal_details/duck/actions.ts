import * as type from './types';

export const setJobTitle = (value: string) => ({
  type: type.SET_JOB_TITLE,
  value,
});

export const setFirstname = (value: string) => ({
  type: type.SET_FIRST_NAME,
  value,
});

export const setLastname = (value: string) => ({
  type: type.SET_LAST_NAME,
  value,
});

export const setCity = (value: string) => ({
  type: type.SET_CITY,
  value,
});

export const setAddress = (value: string) => ({
  type: type.SET_ADDRESS,
  value,
});

export const setCountry = (value: string) => ({
  type: type.SET_COUNTRY,
  value,
});

export const setDateOfBirth = (value: Date) => ({
  type: type.SET_DATE_OF_BIRTH,
  value,
});

export const setDrivingLicense = (value: string) => ({
  type: type.SET_DRIVING_LICENSE,
  value,
});

export const setEmail = (value: string) => ({
  type: type.SET_EMAIL,
  value,
});

export const setNationality = (value: string) => ({
  type: type.SET_NATIONALITY,
  value,
});

export const setPlaceOfBirth = (value: string) => ({
  type: type.SET_PLACE_OF_BIRTH,
  value,
});

export const setPostalCode = (value: number) => ({
  type: type.SET_POSTAL_CODE,
  value,
});

export const setPhone = (value: number) => ({
  type: type.SET_PHONE,
  value,
});
