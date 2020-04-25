import * as type from './Details.types';

export const setJobTitleAction = (value: string) => ({
  type: type.SET_MAIN_JOB_TITLE,
  value,
});

export const setPhotoAction = (value: string) => ({
  type: type.SET_PHOTO,
  value,
});

export const setFirstnameAction = (value: string) => ({
  type: type.SET_FIRST_NAME,
  value,
});

export const setLastnameAction = (value: string) => ({
  type: type.SET_LAST_NAME,
  value,
});

export const setCityAction = (value: string) => ({
  type: type.SET_CITY,
  value,
});

export const setAddressAction = (value: string) => ({
  type: type.SET_ADDRESS,
  value,
});

export const setCountryAction = (value: string) => ({
  type: type.SET_COUNTRY,
  value,
});

export const setDateOfBirthAction = (value: Date) => ({
  type: type.SET_DATE_OF_BIRTH,
  value,
});

export const setDrivingLicenseAction = (value: string) => ({
  type: type.SET_DRIVING_LICENSE,
  value,
});

export const setEmailAction = (value: string) => ({
  type: type.SET_EMAIL,
  value,
});

export const setNationalityAction = (value: string) => ({
  type: type.SET_NATIONALITY,
  value,
});

export const setPlaceOfBirthAction = (value: string) => ({
  type: type.SET_PLACE_OF_BIRTH,
  value,
});

export const setPostalCodeAction = (value: string) => ({
  type: type.SET_POSTAL_CODE,
  value,
});

export const setPhoneAction = (value: string) => ({
  type: type.SET_PHONE,
  value,
});
