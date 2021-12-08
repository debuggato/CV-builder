import * as type from '../../store/types/Details.type';
import initialState from '../../store/states/Details.state';
import { ActionType } from '../../store/models/Details.model';

const reducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case type.PHOTO_UPLOADED:
			return {
				...state,
				photo: action.value,
			};
		case type.JOB_TITLE_SET:
			return {
				...state,
				jobTitle: action.value,
			};
		case type.FIRST_NAME_SET:
			return {
				...state,
				firstName: action.value,
			};
		case type.LAST_NAME_SET:
			return {
				...state,
				lastName: action.value,
			};
		case type.ADDRESS_SET:
			return {
				...state,
				address: action.value,
			};
		case type.CITY_SET:
			return {
				...state,
				city: action.value,
			};
		case type.COUNTRY_SET:
			return {
				...state,
				country: action.value,
			};
		case type.DATE_OF_BIRTH_SET:
			return {
				...state,
				dateOfBirth: action.value,
			};
		case type.DRIVING_LICENSE_SET:
			return {
				...state,
				drivingLicense: action.value,
			};
		case type.EMAIL_SET:
			return {
				...state,
				email: action.value,
			};
		case type.PHONE_SET:
			return {
				...state,
				phone: action.value,
			};
		case type.POSTAL_CODE_SET:
			return {
				...state,
				postalCode: action.value,
			};
		case type.NATIONALITY_SET:
			return {
				...state,
				nationality: action.value,
			};
		case type.PLACE_OF_BIRTH_SET:
			return {
				...state,
				placeOfBirth: action.value,
			};
		default:
			break;
	}

	return state;
};

export default reducer;
