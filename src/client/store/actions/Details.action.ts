import * as type from '../../store/types/Details.type';
import * as model from '../../store/models/Details.model';

export const jobTitleAction = (value: string): model.jobTitleModelAction => ({
	type: type.DETAILS_JOB_TITLE,
	value,
});

export const onPhotoStartAction = (value: any) => ({
	type: type.PHOTO_START,
	value
});

export const onPhotoSuccessAction = (value: string) => ({
	type: type.PHOTO_SUCCESS,
	value
});

export const onPhotoFailureAction = (error: string) => ({
	type: type.PHOTO_FAILURE,
	error
});

export const firstnameAction = (value: string): model.firstNameModelAction => ({
	type: type.DETAILS_FIRST_NAME,
	value,
});

export const lastnameAction = (value: string): model.lastNameModelAction => ({
	type: type.DETAILS_LAST_NAME,
	value,
});

export const cityAction = (value: string): model.cityModelAction => ({
	type: type.DETAILS_CITY,
	value,
});

export const addressAction = (value: string): model.addressModelAction => ({
	type: type.DETAILS_ADDRESS,
	value,
});

export const countryAction = (value: string): model.countryModelAction => ({
	type: type.DETAILS_COUNTRY,
	value,
});

export const dateOfBirthAction = (value: Date): model.dateOfBirthModelAction => ({
	type: type.DETAILS_DATE_OF_BIRTH,
	value,
});

export const drivingLicenseAction = (value: string): model.drivingLicenseModelAction => ({
	type: type.DETAILS_DRIVING_LICENSE,
	value,
});

export const emailAction = (value: string): model.emailModelAction => ({
	type: type.DETAILS_EMAIL,
	value,
});

export const nationalityAction = (value: string): model.nationalityModelAction => ({
	type: type.DETAILS_NATIONALITY,
	value,
});

export const placeOfBirthAction = (value: string): model.placeOfBirthModelAction => ({
	type: type.DETAILS_PLACE_OF_BIRTH,
	value,
});

export const postalCodeAction = (value: string): model.postalCodeModelAction => ({
	type: type.DETAILS_POSTAL_CODE,
	value,
});

export const phoneAction = (value: string): model.phoneModelAction => ({
	type: type.DETAILS_PHONE,
	value,
});
