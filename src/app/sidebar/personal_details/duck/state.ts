import { PersonalDetailsState } from './model';

const initialState: PersonalDetailsState = {
  jobTitle: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: null,
  country: '',
  city: '',
  address: '',
  postalCode: null,
  drivingLicense: '',
  nationality: '',
  placeOfBirth: '',
  dateOfBirth: new Date(),
};

export default initialState;
