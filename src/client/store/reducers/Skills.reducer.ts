import * as type from '../../store/types/Skills.type';
import initialState from '../../store/states/Skills.state';
import { ActionType } from '../../store/models/Skills.model';

const reducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case type.SKILL_ADDED:
			return {
				...state,
				[action.id]: action.value,
			};
		case type.SKILL_NAME_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					name: action.value,
				},
			};
		case type.SKILL_LEVEL_SET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					level: action.value,
				},
			};
		default:
			break;
	}

	return state;
};

export default reducer;
