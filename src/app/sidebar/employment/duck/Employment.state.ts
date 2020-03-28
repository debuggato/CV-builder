import { EmploymentState } from './Employment.model';

const initialState: EmploymentState = [
  {
    jobTitle: null,
    employer: null,
    city: null,
    dateFrom: new Date(),
    dateTo: new Date(),
    description: null,
  },
];

export default initialState;
