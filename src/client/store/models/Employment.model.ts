import * as types from '../../store/types/Employment.type';

export type EmploymentState = [
	{
		jobTitle: string;
		employer: string;
		city: string;
		dateFrom: string;
		dateTo: string;
		description: string;
	},
];

interface addEmploymentModelAction {
	type: typeof types.ADD_EMPLOYMENT;
	id: number;
	value: any;
}

interface jobTitleModelAction {
	type: typeof types.EMPLOYMENT_JOB_TITLE;
	id: number;
	value: string;
}

interface employerModelAction {
	type: typeof types.EMPLOYMENT_EMPLOYER;
	id: number;
	value: string;
}

interface cityModelAction {
	type: typeof types.EMPLOYMENT_CITY;
	id: number;
	value: string;
}

interface descriptionModelAction {
	type: typeof types.EMPLOYMENT_DESCRIPTION;
	id: number;
	value: string;
}

interface dateFromModelAction {
	type: typeof types.EMPLOYMENT_DATE_FROM;
	id: number;
	value: string;
}

interface dateToModelAction {
	type: typeof types.EMPLOYMENT_DATE_TO;
	id: number;
	value: string;
}

export type ActionType = addEmploymentModelAction &
	jobTitleModelAction &
	employerModelAction &
	cityModelAction &
	descriptionModelAction &
	dateFromModelAction &
	dateToModelAction;
