import * as type from './Courses.types';

export const addCourse = (id: number, value: any) => ({
  type: type.ADD_COURSE,
  id: id + 1,
  value,
});

export const setCourse = (id: number, value: string) => ({
  type: type.SET_COURSE,
  id,
  value,
});

export const setInstitution = (id: number, value: string) => ({
  type: type.SET_INSTITUTION,
  id,
  value,
});

export const setDateFrom = (id: number, value: string) => ({
  type: type.SET_DATE_FROM,
  id,
  value,
});

export const setDateTo = (id: number, value: string) => ({
  type: type.SET_DATE_TO,
  id,
  value,
});
