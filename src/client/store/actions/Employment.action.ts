import * as type from '../../store/types/Employment.type';

export const addEmploymentAction = (id: number, value: any) => ({
	type: type.EMPLOYMENT_ADDED,
	id: id + 1,
	value,
});

export const jobTitleAction = (id: number, value: string) => ({
	type: type.EMPLOYMENT_JOB_TITLE_SET,
	id,
	value,
});

export const employerAction = (id: number, value: string) => ({
	type: type.EMPLOYMENT_EMPLOYER_SET,
	id,
	value,
});

export const cityAction = (id: number, value: string) => ({
	type: type.EMPLOYMENT_CITY_SET,
	id,
	value,
});

export const dateFromAction = (id: number, value: Date) => ({
	type: type.EMPLOYMENT_DATE_FROM_SET,
	id,
	value,
});

export const dateToAction = (id: number, value: Date) => ({
	type: type.EMPLOYMENT_DATE_TO_SET,
	id,
	value,
});

export const descriptionAction = (id: number, value: string) => ({
	type: type.EMPLOYMENT_DESCRIPTION_SET,
	id,
	value,
});
