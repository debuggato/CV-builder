import { createStore, combineReducers } from 'redux';

import personalDetails from './app/sidebar/personal_details/duck/reducers';
import professionalSummary from './app/sidebar/professional_summary/duck/reducers';
import employmentHistory from './app/sidebar/employment_history/duck/reducers';
import education from './app/sidebar/education/duck/Education.reducers';
import { generic } from './genericState';

const rootReducer = combineReducers({
  personalDetails,
  professionalSummary,
  employmentHistory,
  education,
  generic: generic,
});

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
