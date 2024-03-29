import * as type from '../../store/types/Education.type';
import * as model from '../../store/models/Education.model';

export const addEducationAction = (id: number, value: any): model.addEducationModelAction => ({
	type: type.EDUCATION_ADDED,
	id: id + 1,
	value,
});

export const schoolAction = (id: number, value: string): model.schoolModelAction => ({
	type: type.EDUCATION_SCHOOL_SET,
	id,
	value,
});

export const degreeAction = (id: number, value: string): model.degreeModelAction => ({
	type: type.EDUCATION_DEGREE_SET,
	id,
	value,
});

export const cityAction = (id: number, value: string): model.cityModelAction => ({
	type: type.EDUCATION_CITY_SET,
	id,
	value,
});

export const descriptionAction = (id: number, value: string): model.descriptionModelAction => ({
	type: type.EDUCATION_DESCRIPTION_SET,
	id,
	value,
});

export const dateFromAction = (id: number, value: Date): model.dateFromModelAction => ({
	type: type.EDUCATION_DATE_FROM_SET,
	id,
	value,
});

export const dateToAction = (id: number, value: Date): model.dateToModelAction => ({
	type: type.EDUCATION_DATE_TO_SET,
	id,
	value,
});
