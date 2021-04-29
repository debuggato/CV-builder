import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import sagas from './saga';
import details from './reducers/Details.reducer';
import summary from './reducers/Summary.reducer';
import employment from './reducers/Employment.reducer';
import education from './reducers/Education.reducer';
import skills from './reducers/Skills.reducer';
import links from './reducers/Links.reducer';
import courses from './reducers/Courses.reducer';
import root from './reducers/Root.reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	details,
	summary,
	employment,
	education,
	skills,
	links,
	courses,
	root,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(sagaMiddleware)
	));

sagaMiddleware.run(sagas);

export default store;
