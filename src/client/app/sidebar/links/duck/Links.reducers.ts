import * as type from './Links.types';
import initialState from './Links.state';
import { ActionType } from './Links.model';

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case type.ADD_LINK:
      return {
        ...state,
        [action.id]: action.value,
      };
    case type.SET_LABEL:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          label: action.value,
        },
      };
    case type.SET_LINK:
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
