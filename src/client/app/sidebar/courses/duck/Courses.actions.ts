import * as type from './Courses.types';
import * as model from './Courses.model';

export const addCourseAction = (id: number, value: any): model.AddCourseModelAction => ({
  type: type.ADD_COURSE,
  id: id + 1,
  value,
});

export const courseAction = (id: number, value: string): model.courseModelAction => ({
  type: type.COURSE_TITLE,
  id,
  value,
});

export const institutionAction = (id: number, value: string): model.institutionModelAction => ({
  type: type.COURSE_INSTITUTION,
  id,
  value,
});

export const dateFromAction = (id: number, value: Date): model.dateFromModelAction => ({
  type: type.COURSE_DATE_FROM,
  id,
  value,
});

export const dateToAction = (id: number, value: Date): model.dateToModelAction => ({
  type: type.COURSE_DATE_TO,
  id,
  value,
});
