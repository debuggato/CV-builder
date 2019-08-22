import { createStore, combineReducers } from 'redux'

import {
  personalDetailsReducer
} from './reducers'

const rootReducer = combineReducers({
  personalDetails: personalDetailsReducer
})

const store = createStore(rootReducer, {})

export default store;
