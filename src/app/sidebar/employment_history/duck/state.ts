import { EmploymentState } from './model';

const initialState: EmploymentState = [
  {
    jobTitle: null,
    employer: null,
    city: null,
    startDate: new Date(),
    endDate: new Date(),
    description: null,
  },
];

export default initialState;
