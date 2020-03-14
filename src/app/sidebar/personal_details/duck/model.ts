import * as types from './types';

export type PersonalDetailsState = {
  jobTitle: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: number | null;
  country: string | null;
  city: string | null;
  address: string | null;
  postalCode: number | null;
  drivingLicense: string | null;
  nationality: string | null;
  placeOfBirth: string | null;
  dateOfBirth: Date;
};

export interface ReduxProps {
  setJobTitle: (arg0: string) => void;
  setFirstName: (arg0: string) => void;
  setLastName: (arg0: string) => void;
  setCity: (arg0: string) => void;
  setPostalCode: (arg0: number) => void;
  setPhone: (arg0: number) => void;
  setEmail: (arg0: string) => void;
  setCountry: (arg0: string) => void;
  setAddress: (arg0: string) => void;
  setDrivingLicense: (arg0: string) => void;
  setNationality: (arg0: string) => void;
  setPlaceOfBirth: (arg0: string) => void;
  setDateOfBirth: (arg0: Date) => void;
}

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
