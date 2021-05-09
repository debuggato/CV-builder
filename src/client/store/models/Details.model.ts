import * as types from '../../store/types/Details.type';

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
	type: typeof types.JOB_TITLE_SET;
	value: string;
}

export interface firstNameModelAction {
	type: typeof types.FIRST_NAME_SET;
	value: string;
}

export interface lastNameModelAction {
	type: typeof types.LAST_NAME_SET;
	value: string;
}

export interface cityModelAction {
	type: typeof types.CITY_SET;
	value: string;
}

export interface postalCodeModelAction {
	type: typeof types.POSTAL_CODE_SET;
	value: string;
}

export interface phoneModelAction {
	type: typeof types.PHONE_SET;
	value: string;
}

export interface emailModelAction {
	type: typeof types.EMAIL_SET;
	value: string;
}

export interface countryModelAction {
	type: typeof types.COUNTRY_SET;
	value: string;
}

export interface addressModelAction {
	type: typeof types.ADDRESS_SET;
	value: string;
}

export interface drivingLicenseModelAction {
	type: typeof types.DRIVING_LICENSE_SET;
	value: string;
}

export interface nationalityModelAction {
	type: typeof types.NATIONALITY_SET;
	value: string;
}

export interface placeOfBirthModelAction {
	type: typeof types.PLACE_OF_BIRTH_SET;
	value: string;
}

export interface dateOfBirthModelAction {
	type: typeof types.DATE_OF_BIRTH_SET;
	value: Date;
}

export type ActionType = jobTitleModelAction |
	firstNameModelAction |
	lastNameModelAction |
	cityModelAction |
	postalCodeModelAction |
	phoneModelAction |
	emailModelAction |
	countryModelAction |
	addressModelAction |
	drivingLicenseModelAction |
	nationalityModelAction |
	placeOfBirthModelAction |
	dateOfBirthModelAction;
