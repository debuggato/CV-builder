import { createStore, combineReducers } from 'redux';

import personalDetails from './app/sidebar/personal_details/duck/reducers';
import summary from './app/sidebar/summary/duck/Summary.reducers';
import employment from './app/sidebar/employment/duck/Employment.reducers';
import education from './app/sidebar/education/duck/Education.reducers';
import skills from './app/sidebar/skills/duck/Skills.reducers';
import links from './app/sidebar/links/duck/Links.reducers';
import generic from './genericState/Generic.reducers';

const rootReducer = combineReducers({
  personalDetails,
  summary,
  employment,
  education,
  skills,
  links,
  generic,
});

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
