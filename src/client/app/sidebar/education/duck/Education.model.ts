import * as types from './Education.types';

export type EducationState = [
  {
    school: string;
    degree: string;
    city: string;
    description: string;
    dateFrom: string;
    dateTo: string;
  },
];

export interface addEducationModelAction {
  type: typeof types.ADD_EDUCATION;
  id: number;
  value: any;
}

export interface schoolModelAction {
  type: typeof types.EDUCATION_SCHOOL;
  id: number;
  value: string;
}

export interface degreeModelAction {
  type: typeof types.EDUCATION_DEGREE;
  id: number;
  value: string;
}

export interface cityModelAction {
  type: typeof types.EDUCATION_CITY;
  id: number;
  value: string;
}

export interface descriptionModelAction {
  type: typeof types.EDUCATION_DESCRIPTION;
  id: number;
  value: string;
}

export interface dateFromModelAction {
  type: typeof types.EDUCATION_DATE_FROM;
  id: number;
  value: Date;
}

export interface dateToModelAction {
  type: typeof types.EDUCATION_DATE_TO;
  id: number;
  value: Date;
}

export type ActionType = addEducationModelAction &
  schoolModelAction &
  degreeModelAction &
  cityModelAction &
  descriptionModelAction &
  dateFromModelAction &
  dateToModelAction;
