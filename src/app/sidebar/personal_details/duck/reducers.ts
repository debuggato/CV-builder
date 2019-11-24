import * as type from './types';
import initialState from './state';

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case type.SET_JOB_TITLE:
      state = {
        ...state,
        jobTitle: action.payload,
      };
      break;
    case type.SET_FIRST_NAME:
      state = {
        ...state,
        firstName: action.payload,
      };
      break;
    case type.SET_LAST_NAME:
      state = {
        ...state,
        lastName: action.payload,
      };
      break;
    case type.SET_ADDRESS:
      state = {
        ...state,
        address: action.payload,
      };
      break;
    case type.SET_CITY:
      state = {
        ...state,
        city: action.payload,
      };
      break;
    case type.SET_COUNTRY:
      state = {
        ...state,
        country: action.payload,
      };
      break;
    case type.SET_DATE_OF_BIRTH:
      state = {
        ...state,
        dateOfBirth: action.payload,
      };
      break;
    case type.SET_DRIVING_LICENSE:
      state = {
        ...state,
        drivingLicense: action.payload,
      };
      break;
    case type.SET_EMAIL:
      state = {
        ...state,
        email: action.payload,
      };
      break;
    case type.SET_PHONE:
      state = {
        ...state,
        phone: action.payload,
      };
      break;
    case type.SET_POSTAL_CODE:
      state = {
        ...state,
        postalCode: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};

export default reducer;
