import initialState from '../../store/states/Employment.state';
import * as type from '../../store/types/Employment.type';
import { ActionType } from '../../store/models/Employment.model';

const reducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case type.EMPLOYMENT_ADDED:
			return {
				...state,
				[action.id]: action.value,
			};
		case type.EMPLOYMENT_JOB_TITLE_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					jobTitle: action.value,
				},
			};
		case type.EMPLOYMENT_EMPLOYER_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					employer: action.value,
				},
			};
		case type.EMPLOYMENT_CITY_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					city: action.value,
				},
			};
		case type.EMPLOYMENT_DATE_FROM_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					dateFrom: action.value,
				},
			};
		case type.EMPLOYMENT_DATE_TO_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					dateTo: action.value,
				},
			};
		case type.EMPLOYMENT_DESCRIPTION_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					description: action.value,
				},
			};
		default:
			return state;
	}
};

export default reducer;
