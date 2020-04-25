import { Dispatch } from 'redux';
import * as action from './Details.actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPhoto: (value: string) => {
    dispatch(action.setPhotoAction(value));
  },
  setJobTitle: (value: string) => {
    dispatch(action.setJobTitleAction(value));
  },
  setFirstName: (value: string) => {
    dispatch(action.setFirstnameAction(value));
  },
  setLastName: (value: string) => {
    dispatch(action.setLastnameAction(value));
  },
  setCity: (value: string) => {
    dispatch(action.setCityAction(value));
  },
  setEmail: (value: string) => {
    dispatch(action.setEmailAction(value));
  },
  setPhone: (value: string) => {
    dispatch(action.setPhoneAction(value));
  },
  setCountry: (value: string) => {
    dispatch(action.setCountryAction(value));
  },
  setAddress: (value: string) => {
    dispatch(action.setAddressAction(value));
  },
  setPostalCode: (value: string) => {
    dispatch(action.setPostalCodeAction(value));
  },
  setDrivingLicense: (value: string) => {
    dispatch(action.setDrivingLicenseAction(value));
  },
  setNationality: (value: string) => {
    dispatch(action.setNationalityAction(value));
  },
  setPlaceOfBirth: (value: string) => {
    dispatch(action.setPlaceOfBirthAction(value));
  },
  setDateOfBirth: (value: Date) => {
    console.log(value);
    dispatch(action.setDateOfBirthAction(value));
  },
});

export default mapDispatchToProps;
