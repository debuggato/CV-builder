import * as types from './Courses.types';

export type CoursesState = [
  {
    course: string | null;
    institution: string | null;
    dateFrom: string | null;
    dateTo: string | null;
  },
];

interface AddCourse {
  type: typeof types.ADD_COURSE;
  id: number;
  value: any;
}

interface SetCourseAction {
  type: typeof types.SET_COURSE;
  id: number;
  value: string;
}

interface SetInstitutionAction {
  type: typeof types.SET_INSTITUTION;
  id: number;
  value: string;
}

interface SetDateFromAction {
  type: typeof types.SET_DATE_FROM;
  id: number;
  value: string;
}

interface SetDateToAction {
  type: typeof types.SET_DATE_TO;
  id: number;
  value: string;
}

export type ActionType = AddCourse &
  SetCourseAction &
  SetInstitutionAction &
  SetDateFromAction &
  SetDateToAction;
