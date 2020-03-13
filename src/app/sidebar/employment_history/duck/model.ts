import * as types from './types';

export type EmploymentState = [
  {
    jobTitle: string | null;
    employer: string | null;
    city: string | null;
    startDate: Date | string;
    endDate: Date | string;
    description: string | null;
  },
];

export interface ReduxProps {
  addEmployment: (arg0: number, arg1: any) => void;
  setJobTitle: (arg0: number, arg1: string) => void;
  setEmployer: (arg0: number, arg1: string) => void;
  setCity: (arg0: number, arg1: string) => void;
  setStartDate: (arg0: number, arg1: string) => void;
  setEndDate: (arg0: number, arg1: string) => void;
  setDescription: (arg0: number, arg1: string) => void;
}

interface AddEmployment {
  type: typeof types.ADD_EMPLOYMENT;
  id: number;
  value: any;
}

interface SetJobTitleAction {
  type: typeof types.SET_JOB_TITLE;
  id: number;
  value: string;
}

interface SetEmployerAction {
  type: typeof types.SET_EMPLOYER;
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

interface SetStartDateAction {
  type: typeof types.SET_START_DATE;
  id: number;
  value: string;
}

interface SetEndDateAction {
  type: typeof types.SET_END_DATE;
  id: number;
  value: string;
}

export type ActionType = AddEmployment &
  SetJobTitleAction &
  SetEmployerAction &
  SetCityAction &
  SetDescriptionAction &
  SetStartDateAction &
  SetEndDateAction;
