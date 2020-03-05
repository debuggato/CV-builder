import { createStore, combineReducers } from 'redux';

import personalDetailsReducer from './app/sidebar/personal_details/duck/reducers';
import professionalSummaryReducer from './app/sidebar/professional_summary/duck/reducers';
import employmentHistoryReducer from './app/sidebar/employment_history/duck/reducers';
import { genericReducer } from './genericState';

const rootReducer = combineReducers({
  personalDetails: personalDetailsReducer,
  professionalSummary: professionalSummaryReducer,
  employmentHistory: employmentHistoryReducer,
  genericReducer: genericReducer,
});

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
