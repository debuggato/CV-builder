import { combineReducers } from 'redux';

import details from './app/sidebar/details/duck/Details.reducers';
import summary from './app/sidebar/summary/duck/Summary.reducers';
import employment from './app/sidebar/employment/duck/Employment.reducers';
import education from './app/sidebar/education/duck/Education.reducers';
import skills from './app/sidebar/skills/duck/Skills.reducers';
import links from './app/sidebar/links/duck/Links.reducers';
import courses from './app/sidebar/courses/duck/Courses.reducers';
import generic from './genericState/Generic.reducers';

const rootReducer = combineReducers({
  details,
  summary,
  employment,
  education,
  skills,
  links,
  courses,
  generic,
});

export default rootReducer;
