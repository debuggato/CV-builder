import * as type from './Summary.types';
import initialState from './Summary.state';
import { ActionType } from './Summary.model';

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case type.SET_SUMMARY:
      return {
        ...state,
        summary: action.value,
      };
    default:
      break;
  }
  return state;
};

export default reducer;