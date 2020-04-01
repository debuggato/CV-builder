import { EmploymentState } from './Employment.model';

const initialState: EmploymentState = [
  {
    jobTitle: '',
    employer: '',
    city: '',
    dateFrom: new Date(),
    dateTo: new Date(),
    description: '',
  },
];

export default initialState;
