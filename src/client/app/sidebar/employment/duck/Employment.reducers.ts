import initialState from './Employment.state';
import * as type from './Employment.types';
import { ActionType } from './Employment.model';

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case type.ADD_EMPLOYMENT:
      return {
        ...state,
        [action.id]: action.value,
      };
    case type.SET_JOB_TITLE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          jobTitle: action.value,
        },
      };
    case type.SET_EMPLOYER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          employer: action.value,
        },
      };
    case type.SET_EMPLOYMENT_CITY:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          city: action.value,
        },
      };
    case type.SET_EMPLOYMENT_DATE_FROM:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          dateFrom: action.value,
        },
      };
    case type.SET_EMPLOYMENT_DATE_TO:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          dateTo: action.value,
        },
      };
    case type.SET_EMPLOYMENT_DESCRIPTION:
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
