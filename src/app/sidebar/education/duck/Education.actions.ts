import * as type from './Education.types';

export const addEducation = (id: number, value: any) => ({
  type: type.ADD_EDUCATION,
  id: id + 1,
  value,
});

export const setSchool = (id: number, value: string) => ({
  type: type.SET_SCHOOL,
  id,
  value,
});

export const setDegree = (id: number, value: string) => ({
  type: type.SET_DEGREE,
  id,
  value,
});

export const setCity = (id: number, value: string) => ({
  type: type.SET_CITY,
  id,
  value,
});

export const setDescription = (id: number, value: string) => ({
  type: type.SET_DESCRIPTION,
  id,
  value,
});

export const setDateFrom = (id: number, value: Date) => ({
  type: type.SET_DATE_FROM,
  id,
  value,
});

export const setDateTo = (id: number, value: Date) => ({
  type: type.SET_DATE_TO,
  id,
  value,
});
