import * as type from './Education.types';
import * as model from './Education.model';

export const addEducationAction = (id: number, value: any): model.addEducationModelAction => ({
  type: type.ADD_EDUCATION,
  id: id + 1,
  value,
});

export const schoolAction = (id: number, value: string): model.schoolModelAction => ({
  type: type.EDUCATION_SCHOOL,
  id,
  value,
});

export const degreeAction = (id: number, value: string): model.degreeModelAction => ({
  type: type.EDUCATION_DEGREE,
  id,
  value,
});

export const cityAction = (id: number, value: string): model.cityModelAction => ({
  type: type.EDUCATION_CITY,
  id,
  value,
});

export const descriptionAction = (id: number, value: string): model.descriptionModelAction => ({
  type: type.EDUCATION_DESCRIPTION,
  id,
  value,
});

export const dateFromAction = (id: number, value: Date): model.dateFromModelAction => ({
  type: type.EDUCATION_DATE_FROM,
  id,
  value,
});

export const dateToAction = (id: number, value: Date): model.dateToModelAction => ({
  type: type.EDUCATION_DATE_TO,
  id,
  value,
});
