import {
  SET_JOB_TITLE,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PHONE,
  SET_EMAIL,
  SET_ADDRESS,
  SET_CITY,
  SET_COUNTRY,
  SET_DATE_OF_BIRTH,
  SET_DRIVING_LICENSE,
  SET_NATIONALITY,
  SET_PLACE_OF_BIRTH,
  SET_POSTAL_CODE
} from './constants'

import {
  personalDetails
} from './states'

export const personalDetailsReducer = (state = personalDetails, action: any) => {
  switch (action.type) {
    case SET_JOB_TITLE:
      state = {
        ...state,
        jobTitle: action.payload
      }
    break;
    case SET_FIRST_NAME:
      state = {
        ...state,
        firstName: action.payload
      }
    break;
    case SET_LAST_NAME:
      state = {
        ...state,
        lastName: action.payload
      }
    break;
    case SET_ADDRESS:
      state = {
        ...state,
        address: action.payload
      }
    break;
    case SET_CITY:
      state = {
        ...state,
        city: action.payload
      }
    break;
    case SET_COUNTRY:
      state = {
        ...state,
        country: action.payload
      }
    break;
    case SET_DATE_OF_BIRTH:
      state = {
        ...state,
        dateOfBirth: action.payload
      }
    break;
    case SET_DRIVING_LICENSE:
      state = {
        ...state,
        drivingLicense: action.payload
      }
    break;
    case SET_EMAIL:
      state = {
        ...state,
        email: action.payload
      }
    break;
    case SET_PHONE:
      state = {
        ...state,
        phone: action.payload
      }
    break;
    case SET_POSTAL_CODE:
      state = {
        ...state,
        postalCode: action.payload
      }
    break;
    default:
    break;
  }
  return state
}