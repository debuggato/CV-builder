import initialState from './state';
import * as type from './types';
import { ActionType } from './model';

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case type.ADD_EDUCATION:
      return {
        ...state,
        [action.id]: action.value,
      };
    case type.SET_SCHOOL:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          school: action.value,
        },
      };
    case type.SET_DEGREE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          degree: action.value,
        },
      };
    case type.SET_CITY:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          city: action.value,
        },
      };
    case type.SET_DESCRIPTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          description: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
