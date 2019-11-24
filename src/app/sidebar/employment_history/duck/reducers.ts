import * as type from './types';
import initialState from './state';

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case type.SET_JOB_TITLE:
      return {
        ...state,
        jobTitle: [...action.payload],
      };
    /* case type.SET_EMPLOYER:
      state = {
        ...state,
        employer: action.payload
      }
    break;
    case type.SET_CITY:
      state = {
        ...state,
        city: action.payload
      }
    break;
    case type.SET_START_DATE:
      state = {
        ...state,
        startDate: action.payload
      }
    break;
    case type.SET_END_DATE:
      state = {
        ...state,
        endDate: action.payload
      }
    break;
    case type.SET_DESCRIPTION:
      state = {
        ...state,
        description: action.payload
      }
    break;*/
    default:
      break;
  }
  console.log(state);
  return state;
};

export default reducer;
