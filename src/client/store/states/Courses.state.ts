import { CoursesState } from '../../store/models/Courses.model';

const initialState: CoursesState = [
	{
		course: '',
		institution: '',
		dateFrom: '',
		dateTo: '',
	},
];

export default initialState;
