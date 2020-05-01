import initialState from './Courses.state';
import * as type from './Courses.types';
import { ActionType } from './Courses.model';

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case type.ADD_COURSE:
      return {
        ...state,
        [action.id]: action.value,
      };
    case type.COURSE_TITLE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          course: action.value,
        },
      };
    case type.COURSE_INSTITUTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          institution: action.value,
        },
      };
    case type.COURSE_DATE_FROM:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          dateFrom: action.value,
        },
      };
    case type.COURSE_DATE_TO:
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
