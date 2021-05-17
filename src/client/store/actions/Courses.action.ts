import * as type from '../../store/types/Courses.type';
import * as model from '../../store/models/Courses.model';

export const courseAddedAction = (id: number, value: any): model.AddCourseModelAction => ({
	type: type.COURSE_ADDED,
	id: id + 1,
	value,
});

export const titleSetAction = (id: number, value: string): model.courseModelAction => ({
	type: type.COURSE_TITLE_SET,
	id,
	value,
});

export const institutionAction = (id: number, value: string): model.institutionModelAction => ({
	type: type.COURSE_INSTITUTION_SET,
	id,
	value,
});

export const dateFromAction = (id: number, value: Date): model.dateFromModelAction => ({
	type: type.COURSE_DATE_FROM_SET,
	id,
	value,
});

export const dateToAction = (id: number, value: Date): model.dateToModelAction => ({
	type: type.COURSE_DATE_TO_SET,
	id,
	value,
});
