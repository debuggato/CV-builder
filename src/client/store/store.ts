import { combineReducers } from 'redux';
import details from './reducers/Details.reducer';
import summary from './reducers/Summary.reducer';
import employment from './reducers/Employment.reducer';
import education from './reducers/Education.reducer';
import skills from './reducers/Skills.reducer';
import links from './reducers/Links.reducer';
import courses from './reducers/Courses.reducer';
import root from './reducers/Root.reducer';

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

export default rootReducer;
