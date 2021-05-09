import initialState from '../../store/states//Education.state';
import * as type from '../../store/types/Education.type';
import { ActionType } from '../../store/models/Education.model';

const reducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case type.ADD_EDUCATION:
			return {
				...state,
				[action.id]: action.value,
			};
		case type.EDUCATION_SCHOOL:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					school: action.value,
				},
			};
		case type.EDUCATION_DEGREE:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					degree: action.value,
				},
			};
		case type.EDUCATION_CITY:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					city: action.value,
				},
			};
		case type.EDUCATION_DESCRIPTION:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					description: action.value,
				},
			};
		case type.EDUCATION_DATE_FROM:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					dateFrom: action.value,
				},
			};
		case type.EDUCATION_DATE_TO:
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