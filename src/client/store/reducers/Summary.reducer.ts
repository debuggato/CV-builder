import { SUMMARY_SET } from '../../store/types/Summary.type';
import initialState from '../../store/states/Summary.state';
import { ActionType } from '../../store/models/Summary.model';

const reducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case SUMMARY_SET:
			return {
				...state,
				description: action.value,
			};
		default:
			break;
	}

	return state;
}

export default reducer;
