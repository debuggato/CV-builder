import * as type from './types';

export const addEmployment = (id: number, value: any) => ({
  type: type.ADD_EMPLOYMENT,
  payload: [id, value],
});

export const setJobTitle = (value: string) => ({
  type: type.SET_JOB_TITLE,
  payload: value,
});

export const setEmployer = (value: string) => ({
  type: type.SET_EMPLOYER,
  payload: value,
});

export const setCity = (value: string) => ({
  type: type.SET_CITY,
  payload: value,
});

export const setStartDate = (value: string) => ({
  type: type.SET_START_DATE,
  payload: value,
});

export const setEndDate = (value: string) => ({
  type: type.SET_END_DATE,
  payload: value,
});

export const setDescription = (value: string) => ({
  type: type.SET_DESCRIPTION,
  payload: value,
});
