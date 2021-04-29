import { EmploymentState } from '../../store/models/Employment.model';

const initialState: EmploymentState = [
	{
		jobTitle: '',
		employer: '',
		city: '',
		dateFrom: '',
		dateTo: '',
		description: '',
	},
];

export default initialState;
