import initialState from '../../store/states/Education.state';
import * as type from '../../store/types/Education.type';
import { ActionType } from '../../store/models/Education.model';

const reducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case type.EDUCATION_ADDED:
			return {
				...state,
				[action.id]: action.value,
			};
		case type.EDUCATION_SCHOOL_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					school: action.value,
				},
			};
		case type.EDUCATION_DEGREE_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					degree: action.value,
				},
			};
		case type.EDUCATION_CITY_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					city: action.value,
				},
			};
		case type.EDUCATION_DESCRIPTION_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					description: action.value,
				},
			};
		case type.EDUCATION_DATE_FROM_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					dateFrom: action.value,
				},
			};
		case type.EDUCATION_DATE_TO_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					dateTo: action.value,
				},
			};
		default:
			return state;
	}
};

export default reducer;
