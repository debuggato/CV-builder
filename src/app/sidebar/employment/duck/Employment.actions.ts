import * as type from './Employment.types';

export const addEmploymentAction = (id: number, value: any) => ({
  type: type.ADD_EMPLOYMENT,
  id: id + 1,
  value,
});

export const setJobTitleAction = (id: number, value: string) => ({
  type: type.SET_JOB_TITLE,
  id,
  value,
});

export const setEmployerAction = (id: number, value: string) => ({
  type: type.SET_EMPLOYER,
  id,
  value,
});

export const setCityAction = (id: number, value: string) => ({
  type: type.SET_EMPLOYMENT_CITY,
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

export const setDescriptionAction = (id: number, value: string) => ({
  type: type.SET_EMPLOYMENT_DESCRIPTION,
  id,
  value,
});
