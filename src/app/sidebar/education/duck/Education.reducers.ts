import initialState from './Education.state';
import * as type from './Education.types';
import { ActionType } from './Education.model';

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
    case type.SET_EDUCATION_DESCRIPTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          description: action.value,
        },
      };
    case type.SET_DATE_FROM:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          dateFrom: action.value,
        },
      };
    case type.SET_DATE_TO:
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
};

export default reducer;
