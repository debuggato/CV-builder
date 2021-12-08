import * as type from '../../store/types/Details.type';
import * as model from '../../store/models/Details.model';

export const jobTitleAction = (value: string) => ({
	type: type.JOB_TITLE_SET,
	value,
});

export const onPhotoSuccessAction = (value: string) => ({
	type: type.PHOTO_UPLOADED,
	value
});

export const firstnameAction = (value: string): model.firstNameModelAction => ({
	type: type.FIRST_NAME_SET,
	value,
});

export const lastnameAction = (value: string): model.lastNameModelAction => ({
	type: type.LAST_NAME_SET,
	value,
});

export const cityAction = (value: string): model.cityModelAction => ({
	type: type.CITY_SET,
	value,
});

export const addressAction = (value: string): model.addressModelAction => ({
	type: type.ADDRESS_SET,
	value,
});

export const countryAction = (value: string): model.countryModelAction => ({
	type: type.COUNTRY_SET,
	value,
});

export const dateOfBirthAction = (value: Date): model.dateOfBirthModelAction => ({
	type: type.DATE_OF_BIRTH_SET,
	value,
});

export const drivingLicenseAction = (value: string): model.drivingLicenseModelAction => ({
	type: type.DRIVING_LICENSE_SET,
	value,
});

export const emailAction = (value: string): model.emailModelAction => ({
	type: type.EMAIL_SET,
	value,
});

export const nationalityAction = (value: string): model.nationalityModelAction => ({
	type: type.NATIONALITY_SET,
	value,
});

export const placeOfBirthAction = (value: string): model.placeOfBirthModelAction => ({
	type: type.PLACE_OF_BIRTH_SET,
	value,
});

export const postalCodeAction = (value: string): model.postalCodeModelAction => ({
	type: type.POSTAL_CODE_SET,
	value,
});

export const phoneAction = (value: string): model.phoneModelAction => ({
	type: type.PHONE_SET,
	value,
});
