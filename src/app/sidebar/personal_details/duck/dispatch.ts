import { Dispatch } from 'redux';
import * as action from './actions';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setJobTitle: (value: string) => {
      dispatch(action.setJobTitle(value));
    },
    setFirstName: (value: string) => {
      dispatch(action.setFirstname(value));
    },
    setLastName: (value: string) => {
      dispatch(action.setLastname(value));
    },
    setCity: (value: string) => {
      dispatch(action.setCity(value));
    },
    setEmail: (value: string) => {
      dispatch(action.setEmail(value));
    },
    setPhone: (value: number) => {
      dispatch(action.setPhone(value));
    },
    setCountry: (value: string) => {
      dispatch(action.setCountry(value));
    },
    setAddress: (value: string) => {
      dispatch(action.setAddress(value));
    },
    setPostalCode: (value: number) => {
      dispatch(action.setPostalCode(value));
    },
    setDrivingLicense: (value: string) => {
      dispatch(action.setDrivingLicense(value));
    },
    setNationality: (value: string) => {
      dispatch(action.setNationality(value));
    },
    setPlaceOfBirth: (value: string) => {
      dispatch(action.setPlaceOfBirth(value));
    },
    setDateOfBirth: (value: Date) => {
      dispatch(action.setDateOfBirth(value));
    },
  };
};

export default mapDispatchToProps;
