import { Dispatch } from 'redux';
import * as action from './Details.actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPhoto: (value: string) => {
    dispatch(action.setPhotoAction(value));
  },
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
  setPhone: (value: string) => {
    dispatch(action.setPhone(value));
  },
  setCountry: (value: string) => {
    dispatch(action.setCountry(value));
  },
  setAddress: (value: string) => {
    dispatch(action.setAddress(value));
  },
  setPostalCode: (value: string) => {
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
    console.log(value);
    dispatch(action.setDateOfBirth(value));
  },
});

export default mapDispatchToProps;
