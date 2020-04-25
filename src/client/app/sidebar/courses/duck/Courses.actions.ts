import * as type from './Courses.types';

export const addCourseAction = (id: number, value: any) => ({
  type: type.ADD_COURSE,
  id: id + 1,
  value,
});

export const setCourseAction = (id: number, value: string) => ({
  type: type.SET_COURSE,
  id,
  value,
});

export const setInstitutionAction = (id: number, value: string) => ({
  type: type.SET_INSTITUTION,
  id,
  value,
});

export const setDateFromAction = (id: number, value: Date) => ({
  type: type.SET_DATE_FROM,
  id,
  value,
});

export const setDateToAction = (id: number, value: Date) => ({
  type: type.SET_DATE_TO,
  id,
  value,
});
