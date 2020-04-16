import * as types from './Education.types';

export type EducationState = [
  {
    school: string;
    degree: string;
    city: string;
    description: string;
    dateFrom: string | Date;
    dateTo: string | Date;
  },
];

interface AddEducation {
  type: typeof types.ADD_EDUCATION;
  id: number;
  value: any;
}

interface SetSchoolAction {
  type: typeof types.SET_SCHOOL;
  id: number;
  value: string;
}

interface SetDegreeAction {
  type: typeof types.SET_DEGREE;
  id: number;
  value: string;
}

interface SetCityAction {
  type: typeof types.SET_CITY;
  id: number;
  value: string;
}

interface SetDescriptionAction {
  type: typeof types.SET_EDUCATION_DESCRIPTION;
  id: number;
  value: string;
}

export type ActionType = AddEducation &
  SetSchoolAction &
  SetDegreeAction &
  SetCityAction &
  SetDescriptionAction;