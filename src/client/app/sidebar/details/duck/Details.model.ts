import * as types from './Details.types';

export type DetailsState = {
  photo: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  drivingLicense: string;
  nationality: string;
  placeOfBirth: string;
  dateOfBirth: string | Date;
};

export interface jobTitleModelAction {
  type: typeof types.DETAILS_JOB_TITLE;
  value: string;
}

export interface firstNameModelAction {
  type: typeof types.DETAILS_FIRST_NAME;
  value: string;
}

export interface lastNameModelAction {
  type: typeof types.DETAILS_LAST_NAME;
  value: string;
}

export interface cityModelAction {
  type: typeof types.DETAILS_CITY;
  value: string;
}

export interface postalCodeModelAction {
  type: typeof types.DETAILS_POSTAL_CODE;
  value: string;
}

export interface phoneModelAction {
  type: typeof types.DETAILS_PHONE;
  value: string;
}

export interface emailModelAction {
  type: typeof types.DETAILS_EMAIL;
  value: string;
}

export interface countryModelAction {
  type: typeof types.DETAILS_COUNTRY;
  value: string;
}

export interface addressModelAction {
  type: typeof types.DETAILS_ADDRESS;
  value: string;
}

export interface drivingLicenseModelAction {
  type: typeof types.DETAILS_DRIVING_LICENSE;
  value: string;
}

export interface nationalityModelAction {
  type: typeof types.DETAILS_NATIONALITY;
  value: string;
}

export interface placeOfBirthModelAction {
  type: typeof types.DETAILS_PLACE_OF_BIRTH;
  value: string;
}

export interface dateOfBirthModelAction {
  type: typeof types.DETAILS_DATE_OF_BIRTH;
  value: Date;
}

export type ActionType = jobTitleModelAction &
  firstNameModelAction &
  lastNameModelAction &
  cityModelAction &
  postalCodeModelAction &
  phoneModelAction &
  emailModelAction &
  countryModelAction &
  addressModelAction &
  drivingLicenseModelAction &
  nationalityModelAction &
  placeOfBirthModelAction &
  dateOfBirthModelAction;
