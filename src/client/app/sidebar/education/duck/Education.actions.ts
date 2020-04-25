import * as type from './Education.types';

export const addEducationAction = (id: number, value: any) => ({
  type: type.ADD_EDUCATION,
  id: id + 1,
  value,
});

export const setSchoolAction = (id: number, value: string) => ({
  type: type.SET_SCHOOL,
  id,
  value,
});

export const setDegreeAction = (id: number, value: string) => ({
  type: type.SET_DEGREE,
  id,
  value,
});

export const setCityAction = (id: number, value: string) => ({
  type: type.SET_CITY,
  id,
  value,
});

export const setDescriptionAction = (id: number, value: string) => ({
  type: type.SET_EDUCATION_DESCRIPTION,
  id,
  value,
});

export const setDateFromAction = (id: number, value: Date) => ({
  type: type.SET_EDUCATION_DATE_FROM,
  id,
  value,
});

export const setDateToAction = (id: number, value: Date) => ({
  type: type.SET_EDUCATION_DATE_TO,
  id,
  value,
});
