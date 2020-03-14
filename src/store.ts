import { createStore, combineReducers } from 'redux';

import personalDetails from './app/sidebar/personal_details/duck/reducers';
import professionalSummary from './app/sidebar/professional_summary/duck/reducers';
import employment from './app/sidebar/employment/duck/Employment.reducers';
import education from './app/sidebar/education/duck/Education.reducers';
import skills from './app/sidebar/skills/duck/Skills.reducers';
import { generic } from './genericState';

const rootReducer = combineReducers({
  personalDetails,
  professionalSummary,
  employment,
  education,
  skills,
  generic,
});

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
