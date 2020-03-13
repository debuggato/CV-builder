import * as type from './types';

export const addEmployment = (id: number, value: any) => ({
  type: type.ADD_EMPLOYMENT,
  id: id + 1,
  value,
});

export const setJobTitle = (id: number, value: string) => ({
  type: type.SET_JOB_TITLE,
  id,
  value,
});

export const setEmployer = (id: number, value: string) => ({
  type: type.SET_EMPLOYER,
  id,
  value,
});

export const setCity = (id: number, value: string) => ({
  type: type.SET_CITY,
  id,
  value,
});

export const setStartDate = (id: number, value: string) => ({
  type: type.SET_START_DATE,
  id,
  value,
});

export const setEndDate = (id: number, value: string) => ({
  type: type.SET_END_DATE,
  id,
  value,
});

export const setDescription = (id: number, value: string) => ({
  type: type.SET_DESCRIPTION,
  id,
  value,
});
