import * as type from './Summary.types';
import initialState from './Summary.state';
import { ActionType } from './Summary.model';

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
