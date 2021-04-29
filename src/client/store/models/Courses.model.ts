import * as types from '../../store/types/Courses.type';

export type CoursesState = [
	{
		course: string | null;
		institution: string | null;
		dateFrom: string | null;
		dateTo: string | null;
	},
];

export interface AddCourseModelAction {
	type: typeof types.ADD_COURSE;
	id: number;
	value: any;
}

export interface courseModelAction {
	type: typeof types.COURSE_TITLE;
	id: number;
	value: string;
}

export interface institutionModelAction {
	type: typeof types.COURSE_INSTITUTION;
	id: number;
	value: string;
}

export interface dateFromModelAction {
	type: typeof types.COURSE_DATE_FROM;
	id: number;
	value: Date;
}

export interface dateToModelAction {
	type: typeof types.COURSE_DATE_TO;
	id: number;
	value: Date;
}

export type ActionType = AddCourseModelAction &
	courseModelAction &
	institutionModelAction &
	dateFromModelAction &
	dateToModelAction;
