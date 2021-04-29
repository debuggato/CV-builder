import * as type from '../../store/types/Summary.type';
import initialState from '../../store/states/Summary.state';
import { ActionType } from '../../store/models/Summary.model';

const reducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case type.SUMMARY:
			return {
				...state,
				description: action.value,
			};
		default:
			break;
	}

	return state;
};

export default reducer;
