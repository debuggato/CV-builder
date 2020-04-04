import * as type from './Skills.types';
import initialState from './Skills.state';
import { ActionType } from './Skills.model';

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case type.ADD_SKILL:
      return {
        ...state,
        [action.id]: action.value,
      };
    case type.SET_NAME:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          name: action.value,
        },
      };
    case type.SET_LEVEL:
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
