import * as types from './types';

export type EducationState = [
  {
    school: string | null;
    degree: string | null;
    city: string | null;
    description: string | null;
  },
];

export interface ReduxProps {
  addEducation: (arg0: number, arg1: any) => void;
  setSchool: (arg0: number, arg1: string) => void;
  setDegree: (arg0: number, arg1: string) => void;
  setCity: (arg0: number, arg1: string) => void;
  setDescription: (arg0: number, arg1: string) => void;
}

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
  type: typeof types.SET_DESCRIPTION;
  id: number;
  value: string;
}

export type ActionType = AddEducation &
  SetSchoolAction &
  SetDegreeAction &
  SetCityAction &
  SetDescriptionAction;
