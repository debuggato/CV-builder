import * as type from './Details.types';
import initialState from './Details.state';
import { ActionType } from './Details.model';

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case type.PHOTO_SUCCESS:
      return {
        ...state,
        photo: `${action.value}?=${Math.random()}`,
      };
    case type.SET_MAIN_JOB_TITLE:
      return {
        ...state,
        jobTitle: action.value,
      };
    case type.SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.value,
      };
    case type.SET_LAST_NAME:
      return {
        ...state,
        lastName: action.value,
      };
    case type.SET_ADDRESS:
      return {
        ...state,
        address: action.value,
      };
    case type.SET_CITY:
      return {
        ...state,
        city: action.value,
      };
    case type.SET_COUNTRY:
      return {
        ...state,
        country: action.value,
      };
    case type.SET_DATE_OF_BIRTH:
      return {
        ...state,
        dateOfBirth: action.value,
      };
    case type.SET_DRIVING_LICENSE:
      return {
        ...state,
        drivingLicense: action.value,
      };
    case type.SET_EMAIL:
      return {
        ...state,
        email: action.value,
      };
    case type.SET_PHONE:
      return {
        ...state,
        phone: action.value,
      };
    case type.SET_POSTAL_CODE:
      return {
        ...state,
        postalCode: action.value,
      };
    case type.SET_NATIONALITY:
      return {
        ...state,
        nationality: action.value,
      };
    case type.SET_PLACE_OF_BIRTH:
      return {
        ...state,
        placeOfBirth: action.value,
      };
    default:
      break;
  }

  return state;
};

export default reducer;
