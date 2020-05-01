import * as type from './Employment.types';

export const addEmploymentAction = (id: number, value: any) => ({
  type: type.ADD_EMPLOYMENT,
  id: id + 1,
  value,
});

export const jobTitleAction = (id: number, value: string) => ({
  type: type.EMPLOYMENT_JOB_TITLE,
  id,
  value,
});

export const employerAction = (id: number, value: string) => ({
  type: type.EMPLOYMENT_EMPLOYER,
  id,
  value,
});

export const cityAction = (id: number, value: string) => ({
  type: type.EMPLOYMENT_CITY,
  id,
  value,
});

export const dateFromAction = (id: number, value: Date) => ({
  type: type.EMPLOYMENT_DATE_FROM,
  id,
  value,
});

export const dateToAction = (id: number, value: Date) => ({
  type: type.EMPLOYMENT_DATE_TO,
  id,
  value,
});

export const descriptionAction = (id: number, value: string) => ({
  type: type.EMPLOYMENT_DESCRIPTION,
  id,
  value,
});
