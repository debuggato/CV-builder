import initialState from '../../store/states/Courses.state';
import * as type from '../../store/types/Courses.type';
import { ActionType } from '../../store/models/Courses.model';

const reducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case type.COURSE_ADDED:
			return {
				...state,
				[action.id]: action.value,
			};
		case type.COURSE_TITLE_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					course: action.value,
				},
			};
		case type.COURSE_INSTITUTION_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					institution: action.value,
				},
			};
		case type.COURSE_DATE_FROM_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					dateFrom: action.value,
				},
			};
		case type.COURSE_DATE_TO_SET:
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
}

export default reducer;
