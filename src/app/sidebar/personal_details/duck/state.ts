import { PersonalDetailsState } from './model';

const initialState: PersonalDetailsState = {
  jobTitle: null,
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  country: null,
  city: null,
  address: null,
  postalCode: null,
  drivingLicense: null,
  nationality: null,
  placeOfBirth: null,
  dateOfBirth: new Date(),
};

export default initialState;
