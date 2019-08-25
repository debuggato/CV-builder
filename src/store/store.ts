import { createStore, combineReducers } from 'redux'

import personalDetailsReducer from '../app/sidebar/personal_details/duck/reducers'

const rootReducer = combineReducers({
  personalDetails: personalDetailsReducer
})

const store = createStore(rootReducer, {})

export default store;
