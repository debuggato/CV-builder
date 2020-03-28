import * as types from './Details.types';

export type DetailsState = {
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

interface SetJobTitleAction {
  type: typeof types.SET_JOB_TITLE;
  value: string;
}

interface SetFirstNameAction {
  type: typeof types.SET_FIRST_NAME;
  value: string;
}

interface SetLastNameAction {
  type: typeof types.SET_LAST_NAME;
  value: string;
}

interface SetCityAction {
  type: typeof types.SET_CITY;
  value: string;
}

interface SetPostalCodeAction {
  type: typeof types.SET_POSTAL_CODE;
  value: number;
}

interface SetPhoneAction {
  type: typeof types.SET_PHONE;
  value: number;
}

interface SetEmailAction {
  type: typeof types.SET_EMAIL;
  value: string;
}

interface SetCountryAction {
  type: typeof types.SET_COUNTRY;
  value: string;
}

interface SetAddressAction {
  type: typeof types.SET_ADDRESS;
  value: string;
}

interface SetDrivingLicenseAction {
  type: typeof types.SET_DRIVING_LICENSE;
  value: string;
}

interface SetNationalityAction {
  type: typeof types.SET_NATIONALITY;
  value: string;
}

interface SetPlaceOfBirthAction {
  type: typeof types.SET_PLACE_OF_BIRTH;
  value: string;
}

interface SetDateOfBirthAction {
  type: typeof types.SET_DATE_OF_BIRTH;
  value: Date;
}

export type ActionType = SetJobTitleAction &
  SetFirstNameAction &
  SetLastNameAction &
  SetCityAction &
  SetPostalCodeAction &
  SetPhoneAction &
  SetEmailAction &
  SetCountryAction &
  SetAddressAction &
  SetDrivingLicenseAction &
  SetNationalityAction &
  SetPlaceOfBirthAction &
  SetDateOfBirthAction;
