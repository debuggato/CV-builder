import { createStore, combineReducers } from 'redux'

import personalDetailsReducer from '../app/sidebar/personal_details/duck/reducers'
import professionalSummaryReducer from '../app/sidebar/professional_summary/duck/reducers'
import employmentHistoryReducer from '../app/sidebar/employment_history/duck/reducers'

const rootReducer = combineReducers({
  personalDetails: personalDetailsReducer,
  professionalSummary: professionalSummaryReducer,
  employmentHistory: employmentHistoryReducer
})

const store = createStore(rootReducer, {})

export default store;
