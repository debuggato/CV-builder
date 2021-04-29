import * as type from '../../store/types/Links.type';
import initialState from '../../store/states//Links.state';
import { ActionType } from '../../store/models/Links.model';

const reducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case type.ADD_LINK:
			return {
				...state,
				[action.id]: action.value,
			};
		case type.LINK_LABEL:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					label: action.value,
				},
			};
		case type.LINK_TITLE:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					link: action.value,
				},
			};
		default:
			break;
	}

	return state;
};

export default reducer;
