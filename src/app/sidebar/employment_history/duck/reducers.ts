import * as type from './types';
import initialState from './state';

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case type.ADD_EMPLOYMENT:
      return {
        ...state,
        [action.payload[0] + 1]: action.payload[1],
      };
    case type.SET_JOB_TITLE:
      return {
        ...state,
        [action.payload[0]]: {
          jobTitle: action.payload[1],
        },
      };
    case type.SET_EMPLOYER:
      return {
        ...state,
        [action.payload[0]]: {
          employer: action.payload[1],
        },
      };
    case type.SET_CITY:
      return {
        ...state,
        [action.payload[0]]: {
          city: action.payload[1],
        },
      };
    case type.SET_START_DATE:
      return {
        ...state,
        [action.payload[0]]: {
          startDate: action.payload[1],
        },
      };
    case type.SET_END_DATE:
      return {
        ...state,
        [action.payload[0]]: {
          endDate: action.payload[1],
        },
      };
    case type.SET_DESCRIPTION:
      return {
        ...state,
        [action.payload[0]]: {
          description: action.payload[1],
        },
      };
    default:
      break;
  }
  return state;
};

export default reducer;
