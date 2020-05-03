import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import sagas from '@client/sagas';
import details from '@sidebar/details/duck/Details.reducers';
import summary from '@sidebar/summary/duck/Summary.reducers';
import employment from '@sidebar/employment/duck/Employment.reducers';
import education from '@sidebar/education/duck/Education.reducers';
import skills from '@sidebar/skills/duck/Skills.reducers';
import links from '@sidebar/links/duck/Links.reducers';
import courses from '@sidebar/courses/duck/Courses.reducers';
import generic from './genericState/Generic.reducers';

const sagaMiddleware = createSagaMiddleware();

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

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ));

sagaMiddleware.run(sagas);

export default store;
